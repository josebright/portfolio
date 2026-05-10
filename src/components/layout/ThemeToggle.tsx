'use client';

import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import { useColorScheme } from '@mui/material/styles';

export function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <Placeholder />;

  const isDark = resolveIsDark(mode);
  const next = isDark ? 'light' : 'dark';
  const label = `Switch to ${next} mode`;

  return (
    <IconButton onClick={() => setMode(next)} aria-label={label} size="small">
      {isDark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
    </IconButton>
  );
}

function Placeholder() {
  return <IconButton aria-hidden disabled size="small" sx={{ opacity: 0 }} />;
}

function resolveIsDark(mode: 'light' | 'dark' | 'system' | undefined): boolean {
  if (mode === 'dark') return true;
  if (mode === 'light') return false;
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
