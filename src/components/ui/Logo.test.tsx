import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/lib/theme';
import { Logo } from './Logo';

function renderLogo() {
  return render(
    <ThemeProvider theme={theme}>
      <Logo />
    </ThemeProvider>,
  );
}

describe('Logo', () => {
  it('renders a link to the home page', () => {
    renderLogo();
    const anchor = screen.getByRole('link', { name: /bright8/i });
    expect(anchor).toHaveAttribute('href', '/');
  });

  it('renders the Bright8 wordmark', () => {
    renderLogo();
    expect(screen.getByRole('link')).toHaveTextContent('Bright8');
  });

  it('has no axe accessibility violations', async () => {
    const { container } = renderLogo();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
