'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import { keyframes, styled } from '@mui/material/styles';
import { SITE } from '@/lib/site';
import { profile } from '@/content/profile';

const ORBIT_IMAGES: readonly string[] = [
  SITE.profileImagePath,
  SITE.profileImagePath,
  SITE.profileImagePath,
  SITE.profileImagePath,
  SITE.profileImagePath,
  SITE.profileImagePath,
];

const FRAME_DESKTOP = 440;
const FRAME_MOBILE = 300;
const RADIUS_DESKTOP = 180;
const RADIUS_MOBILE = 120;
const AVATAR_DESKTOP = 76;
const AVATAR_MOBILE = 52;
const CENTER_DESKTOP = 152;
const CENTER_MOBILE = 112;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const spinReverse = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

const Frame = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: FRAME_DESKTOP,
  height: FRAME_DESKTOP,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: { width: FRAME_MOBILE, height: FRAME_MOBILE },
}));

const Ring = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: RADIUS_DESKTOP * 2,
  height: RADIUS_DESKTOP * 2,
  marginTop: -RADIUS_DESKTOP,
  marginLeft: -RADIUS_DESKTOP,
  borderRadius: '50%',
  border: `1px solid ${theme.palette.secondary.main}`,
  opacity: 0.45,
  [theme.breakpoints.down('md')]: {
    width: RADIUS_MOBILE * 2,
    height: RADIUS_MOBILE * 2,
    marginTop: -RADIUS_MOBILE,
    marginLeft: -RADIUS_MOBILE,
  },
}));

const Track = styled(Box)({
  position: 'absolute',
  inset: 0,
  animation: `${spin} 60s linear infinite`,
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
});

const Slot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: AVATAR_DESKTOP,
  height: AVATAR_DESKTOP,
  marginTop: -AVATAR_DESKTOP / 2,
  marginLeft: -AVATAR_DESKTOP / 2,
  [theme.breakpoints.down('md')]: {
    width: AVATAR_MOBILE,
    height: AVATAR_MOBILE,
    marginTop: -AVATAR_MOBILE / 2,
    marginLeft: -AVATAR_MOBILE / 2,
  },
}));

const Squircle = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  borderRadius: '38% 62% 55% 45% / 50% 45% 55% 50%',
  overflow: 'hidden',
  border: `1px solid ${theme.palette.divider}`,
  filter: 'grayscale(100%)',
  opacity: 0.55,
  animation: `${spinReverse} 60s linear infinite`,
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
}));

const Center = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: CENTER_DESKTOP,
  height: CENTER_DESKTOP,
  marginTop: -CENTER_DESKTOP / 2,
  marginLeft: -CENTER_DESKTOP / 2,
  borderRadius: '42% 58% 53% 47% / 50% 45% 55% 50%',
  overflow: 'hidden',
  border: `2px solid ${theme.palette.secondary.dark}`,
  boxShadow: `0 0 0 6px rgba(212, 168, 83, 0.08)`,
  [theme.breakpoints.down('md')]: {
    width: CENTER_MOBILE,
    height: CENTER_MOBILE,
    marginTop: -CENTER_MOBILE / 2,
    marginLeft: -CENTER_MOBILE / 2,
  },
}));

interface SlotPosition {
  readonly x: number;
  readonly y: number;
  readonly src: string;
}

function computeOrbitPositions(images: readonly string[], radius: number): SlotPosition[] {
  return images.map((src, i) => {
    const angle = (i / images.length) * Math.PI * 2 - Math.PI / 2;
    return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius, src };
  });
}

export function HeroOrbit() {
  const desktopSlots = computeOrbitPositions(ORBIT_IMAGES, RADIUS_DESKTOP);
  const mobileSlots = computeOrbitPositions(ORBIT_IMAGES, RADIUS_MOBILE);
  return (
    <Frame aria-hidden>
      <Ring />
      <Track>
        {desktopSlots.map((slot, i) => (
          <Slot
            key={`d-${i}`}
            sx={{
              transform: { xs: 'none', md: `translate(${slot.x}px, ${slot.y}px)` },
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Squircle>
              <Image src={slot.src} alt="" fill sizes="84px" style={{ objectFit: 'cover' }} />
            </Squircle>
          </Slot>
        ))}
        {mobileSlots.map((slot, i) => (
          <Slot
            key={`m-${i}`}
            sx={{
              transform: { xs: `translate(${slot.x}px, ${slot.y}px)`, md: 'none' },
              display: { xs: 'block', md: 'none' },
            }}
          >
            <Squircle>
              <Image src={slot.src} alt="" fill sizes="56px" style={{ objectFit: 'cover' }} />
            </Squircle>
          </Slot>
        ))}
      </Track>
      <Center>
        <Image
          src={SITE.profileImagePath}
          alt={`Portrait of ${profile.name}`}
          fill
          priority
          sizes="(max-width: 900px) 120px, 168px"
          style={{ objectFit: 'cover' }}
        />
      </Center>
    </Frame>
  );
}
