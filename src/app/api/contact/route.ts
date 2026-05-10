import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';
import { reportError } from '@/lib/observability';

const ContactPayload = z.object({
  name: z
    .string()
    .min(2, 'Please enter your name (at least 2 characters).')
    .max(80, 'Name must be 80 characters or fewer.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters.')
    .max(2000, 'Message must be 2000 characters or fewer.'),
  website: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const limit = await rateLimit(clientIdentifier(request));
  if (!limit.allowed) {
    return tooManyRequests(limit.resetAt);
  }
  const json = await readJson(request);
  if (!json) {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }
  const parsed = ContactPayload.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please fix the highlighted fields.', fields: firstErrorPerField(parsed.error) },
      { status: 400 },
    );
  }
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }
  await deliverMessage(parsed.data);
  return NextResponse.json({ ok: true });
}

function firstErrorPerField(error: z.ZodError): Record<string, string> {
  const fields: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === 'string' && !(key in fields)) {
      fields[key] = issue.message;
    }
  }
  return fields;
}

function tooManyRequests(resetAt: number) {
  const retryAfterSeconds = Math.max(1, Math.ceil((resetAt - Date.now()) / 1000));
  return NextResponse.json(
    { error: 'Too many requests. Please try again shortly.' },
    { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } },
  );
}

function clientIdentifier(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0]?.trim() ?? 'unknown';
  return request.headers.get('x-real-ip') ?? 'unknown';
}

async function readJson(request: NextRequest): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

interface ContactMessage {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

async function deliverMessage(payload: ContactMessage): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.CONTACT_TO_EMAIL;
  const fromAddress = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !toAddress || !fromAddress) {
    console.warn('Contact form: email env vars missing — skipping send.', { name: payload.name });
    return;
  }
  try {
    await sendViaResend({ apiKey, fromAddress, toAddress, payload });
  } catch (error) {
    await reportError(error, { route: '/api/contact' });
    throw error;
  }
}

interface ResendArgs {
  readonly apiKey: string;
  readonly fromAddress: string;
  readonly toAddress: string;
  readonly payload: ContactMessage;
}

async function sendViaResend({ apiKey, fromAddress, toAddress, payload }: ResendArgs) {
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: fromAddress,
      to: toAddress,
      reply_to: payload.email,
      subject: `New portfolio message from ${payload.name}`,
      text: payload.message,
    }),
  });
}
