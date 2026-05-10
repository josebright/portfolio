import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';
import { profile } from '@/content/profile';

export const runtime = 'edge';
export const alt = `${SITE.name} — ${SITE.author}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(<OgCard />, { ...size });
}

function OgCard() {
  return (
    <div style={cardStyle}>
      <div style={topRow}>
        <span style={wordmark}>
          B<span style={accent}>right</span>8
        </span>
        <span style={tagline}>{SITE.tagline}</span>
      </div>
      <div style={headline}>
        {profile.name}
        <div style={subhead}>{SITE.role}</div>
      </div>
      <div style={bottomRow}>
        <span style={hint}>bright8.dev</span>
        <span style={hint}>5+ years · Cloud · AI · Real-time</span>
      </div>
    </div>
  );
}

const cardStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'space-between',
  padding: 80,
  backgroundColor: '#F4F1E8',
  color: '#1F100A',
  fontFamily: 'sans-serif',
};

const topRow = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const wordmark = { fontSize: 36, fontWeight: 800, letterSpacing: '-0.02em' };
const accent = { color: '#D4881A' };
const tagline = {
  textTransform: 'uppercase' as const,
  letterSpacing: '0.18em',
  fontSize: 16,
  fontWeight: 600,
  color: '#5C3A28',
};

const headline = {
  display: 'flex',
  flexDirection: 'column' as const,
  fontSize: 96,
  fontWeight: 800,
  lineHeight: 1,
  letterSpacing: '-0.04em',
};
const subhead = {
  fontSize: 32,
  fontWeight: 500,
  color: '#5C3A28',
  marginTop: 28,
  letterSpacing: '-0.01em',
};

const bottomRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid rgba(31, 16, 10, 0.16)',
  paddingTop: 24,
};
const hint = { fontSize: 22, color: '#5C3A28' };
