'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const brand = {
  ink: '#1F100A',
  brown: '#3D2618',
  brownLight: '#5C3A28',
  sand: '#DDC4A4',
  sandSoft: '#EFE3CF',
  cream: '#F4F1E8',
  paper: '#FAF7F0',
  amber: '#F5A623',
  amberDark: '#D4881A',
  amberLight: '#FFC25C',
} as const;

const baseTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
    cssVarPrefix: 'b8',
  },
  colorSchemes: {
    light: {
      palette: {
        mode: 'light',
        primary: {
          main: brand.brown,
          light: brand.brownLight,
          dark: brand.ink,
          contrastText: brand.cream,
        },
        secondary: {
          main: brand.amber,
          light: brand.amberLight,
          dark: brand.amberDark,
          contrastText: brand.ink,
        },
        background: { default: brand.cream, paper: brand.paper },
        text: { primary: brand.ink, secondary: brand.brownLight },
        divider: 'rgba(31, 16, 10, 0.12)',
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: brand.cream,
          light: brand.paper,
          dark: brand.sand,
          contrastText: brand.ink,
        },
        secondary: {
          main: brand.amber,
          light: brand.amberLight,
          dark: brand.amberDark,
          contrastText: brand.ink,
        },
        background: { default: brand.brown, paper: brand.brownLight },
        text: { primary: brand.cream, secondary: brand.sand },
        divider: 'rgba(244, 241, 232, 0.16)',
      },
    },
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif',
    h1: {
      fontFamily: 'var(--font-sora), sans-serif',
      fontWeight: 800,
      fontSize: 'clamp(3.25rem, 11vw, 8.5rem)',
      lineHeight: 0.95,
      letterSpacing: '-0.045em',
    },
    h2: {
      fontFamily: 'var(--font-sora), sans-serif',
      fontWeight: 800,
      fontSize: 'clamp(2.25rem, 6vw, 4.25rem)',
      lineHeight: 1,
      letterSpacing: '-0.035em',
    },
    h3: {
      fontFamily: 'var(--font-sora), sans-serif',
      fontWeight: 800,
      fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: 'var(--font-sora), sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h5: { fontFamily: 'var(--font-sora), sans-serif', fontWeight: 600, fontSize: '1.125rem' },
    h6: { fontFamily: 'var(--font-sora), sans-serif', fontWeight: 600, fontSize: '1rem' },
    body1: { fontSize: '1.0625rem', lineHeight: 1.6 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@media (prefers-reduced-motion: no-preference)': {
          'html:focus-within': { scrollBehavior: 'smooth' },
        },
        '::selection': { backgroundColor: brand.amber, color: brand.ink },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 999, paddingInline: 26, paddingBlock: 12 } },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    MuiLink: { defaultProps: { underline: 'hover' } },
  },
});

export const theme = responsiveFontSizes(baseTheme);
export { brand };
