'use client';

import { useState, type FormEvent } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';
type FieldName = 'name' | 'email' | 'message';
type FieldErrors = Partial<Record<FieldName, string>>;

const Form = styled('form')({ width: '100%', maxWidth: 640 });

export function ContactForm() {
  const [state, setState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function clearFieldError(name: FieldName) {
    setFieldErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setState('submitting');
    setErrorMessage('');
    setFieldErrors({});
    const result = await postContact(new FormData(formElement));
    if (!result.ok) {
      if (result.fields) setFieldErrors(result.fields);
      setErrorMessage(result.message);
      setState('error');
      return;
    }
    setState('success');
    formElement.reset();
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Stack spacing={2.5}>
        <TextField
          name="name"
          label="Your name"
          required
          fullWidth
          inputProps={{ minLength: 2, maxLength: 80 }}
          error={Boolean(fieldErrors.name)}
          helperText={fieldErrors.name}
          onChange={() => clearFieldError('name')}
        />
        <TextField
          name="email"
          label="Your email"
          type="email"
          required
          fullWidth
          error={Boolean(fieldErrors.email)}
          helperText={fieldErrors.email}
          onChange={() => clearFieldError('email')}
        />
        <TextField
          name="message"
          label="What's on your mind?"
          required
          fullWidth
          multiline
          minRows={5}
          inputProps={{ minLength: 10, maxLength: 2000 }}
          error={Boolean(fieldErrors.message)}
          helperText={fieldErrors.message}
          onChange={() => clearFieldError('message')}
        />
        <input type="text" name="website" tabIndex={-1} autoComplete="off" hidden aria-hidden />
        <SubmitFeedback state={state} errorMessage={errorMessage} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={state === 'submitting'}
          sx={{ alignSelf: 'flex-start' }}
        >
          {state === 'submitting' ? 'Sending…' : 'Send message'}
        </Button>
      </Stack>
    </Form>
  );
}

interface FeedbackProps {
  readonly state: SubmitState;
  readonly errorMessage: string;
}

function SubmitFeedback({ state, errorMessage }: FeedbackProps) {
  if (state === 'success') {
    return <Alert severity="success">Thanks — your message is on its way.</Alert>;
  }
  if (state === 'error') {
    return <Alert severity="error">{errorMessage || 'Something went wrong. Try again.'}</Alert>;
  }
  return null;
}

interface SubmitResult {
  readonly ok: boolean;
  readonly message: string;
  readonly fields?: FieldErrors;
}

async function postContact(formData: FormData): Promise<SubmitResult> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData.entries())),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      const detail = await response.json().catch(() => ({}));
      return {
        ok: false,
        message: detail.error ?? 'Server rejected the message.',
        fields: detail.fields,
      };
    }
    return { ok: true, message: 'sent' };
  } catch {
    return { ok: false, message: 'Network error. Please retry.' };
  }
}
