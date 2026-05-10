import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/lib/theme';
import { ContactForm } from './ContactForm';

const fetchMock = vi.fn();
globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

function renderForm() {
  return render(
    <ThemeProvider theme={theme}>
      <ContactForm />
    </ThemeProvider>,
  );
}

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/your name/i), 'Recruiter');
  await user.type(screen.getByLabelText(/your email/i), 'recruiter@example.com');
  await user.type(
    screen.getByLabelText(/what's on your mind/i),
    'We have an opportunity that fits your background.',
  );
}

describe('ContactForm', () => {
  beforeEach(() => fetchMock.mockReset());

  it('shows a success message after submitting valid data', async () => {
    fetchMock.mockResolvedValueOnce({ ok: true, json: async () => ({ ok: true }) } as Response);
    const user = userEvent.setup();
    renderForm();
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /send message/i }));
    expect(await screen.findByText(/thanks/i)).toBeInTheDocument();
  });

  it('shows an error message when the server rejects', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Invalid form data.' }),
    } as Response);
    const user = userEvent.setup();
    renderForm();
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /send message/i }));
    expect(await screen.findByText(/invalid form data/i)).toBeInTheDocument();
  });

  it('shows an error when the network call throws', async () => {
    fetchMock.mockRejectedValueOnce(new Error('offline'));
    const user = userEvent.setup();
    renderForm();
    await fillValidForm(user);
    await user.click(screen.getByRole('button', { name: /send message/i }));
    expect(await screen.findByText(/network error/i)).toBeInTheDocument();
  });
});
