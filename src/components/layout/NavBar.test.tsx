import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/lib/theme';
import { NavBar } from './NavBar';

const pathnameMock = vi.fn<() => string>();

vi.mock('next/navigation', () => ({
  usePathname: () => pathnameMock(),
}));

function renderNavBar() {
  return render(
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>,
  );
}

describe('NavBar', () => {
  beforeEach(() => pathnameMock.mockReturnValue('/'));

  it('marks the current route with aria-current="page"', () => {
    pathnameMock.mockReturnValue('/projects');
    renderNavBar();
    const projectsLinks = screen.getAllByRole('link', { name: 'Projects' });
    expect(projectsLinks.some((link) => link.getAttribute('aria-current') === 'page')).toBe(true);
  });

  it('does not mark non-active routes as current', () => {
    pathnameMock.mockReturnValue('/projects');
    renderNavBar();
    const aboutLinks = screen.getAllByRole('link', { name: 'About' });
    expect(aboutLinks.every((link) => link.getAttribute('aria-current') !== 'page')).toBe(true);
  });

  it('exposes a Resume link to the CV', () => {
    renderNavBar();
    const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
    expect(resumeLinks[0]).toHaveAttribute('href', '/cv/Uchenna-Bright-Ugwumadu.pdf');
  });

  it('renders an accessible mobile menu trigger when collapsed', () => {
    renderNavBar();
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });
});
