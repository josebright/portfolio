import type { Metadata, Viewport } from 'next';
import './global.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '@/lib/theme';
import { sora, inter } from '@/lib/fonts';
import { SITE } from '@/lib/site';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { PersonJsonLd } from '@/components/seo/PersonJsonLd';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.author}`, template: `%s · ${SITE.name}` },
  description: SITE.shortDescription,
  authors: [{ name: SITE.author }],
  keywords: ['Software Engineer', 'Cloud', 'Full-Stack', 'Next.js', 'AWS', 'Azure', 'TypeScript'],
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.author}`,
    description: SITE.shortDescription,
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F1E8' },
    { media: '(prefers-color-scheme: dark)', color: '#3D2618' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <PersonJsonLd />
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme} defaultMode="system">
            <CssBaseline />
            <NavBar />
            <main id="main">{children}</main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
