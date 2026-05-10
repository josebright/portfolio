'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from './ThemeToggle';
import { NAV_ITEMS, SITE } from '@/lib/site';

const Bar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const NavLink = styled(Link, { shouldForwardProp: (p) => p !== 'active' })<{ active?: boolean }>(
  ({ theme, active }) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontSize: '0.9375rem',
    paddingBottom: 4,
    borderBottom: `2px solid ${active ? theme.palette.text.primary : 'transparent'}`,
    transition: 'border-color 200ms ease',
    '&:hover': { borderColor: theme.palette.secondary.dark },
  }),
);

export function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Bar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 80 }}>
          <Logo />
          <DesktopNav pathname={pathname} />
          <MobileTrigger open={open} onToggle={() => setOpen((v) => !v)} />
        </Toolbar>
      </Container>
      <MobileDrawer open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </Bar>
  );
}

function DesktopNav({ pathname }: { readonly pathname: string }) {
  return (
    <Stack
      direction="row"
      spacing={4}
      alignItems="center"
      sx={{ display: { xs: 'none', md: 'flex' } }}
    >
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          active={isActive(pathname, item.href)}
          aria-current={isActive(pathname, item.href) ? 'page' : undefined}
        >
          {item.label}
        </NavLink>
      ))}
      <ThemeToggle />
      <Button
        component="a"
        href={SITE.cvPath}
        variant="contained"
        color="primary"
        target="_blank"
        rel="noopener"
      >
        Resume
      </Button>
    </Stack>
  );
}

interface ToggleProps {
  readonly open: boolean;
  readonly onToggle: () => void;
}

function MobileTrigger({ open, onToggle }: ToggleProps) {
  return (
    <Stack direction="row" spacing={1} sx={{ display: { xs: 'flex', md: 'none' } }}>
      <ThemeToggle />
      <IconButton onClick={onToggle} aria-label={open ? 'Close menu' : 'Open menu'}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </Stack>
  );
}

interface DrawerProps {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly pathname: string;
}

function MobileDrawer({ open, onClose, pathname }: DrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { sx: { width: 280, p: 3 } } }}
    >
      <Stack spacing={3} sx={{ mt: 6 }}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            onClick={onClose}
            active={isActive(pathname, item.href)}
          >
            {item.label}
          </NavLink>
        ))}
        <Button
          component="a"
          href={SITE.cvPath}
          variant="contained"
          color="primary"
          target="_blank"
          rel="noopener"
        >
          Resume
        </Button>
      </Stack>
    </Drawer>
  );
}

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname.startsWith(href);
}
