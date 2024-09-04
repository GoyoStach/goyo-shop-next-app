// app/fonts.ts
import localFont from 'next/font/local';

const silkscreen = localFont({
  src: '../../assets/fonts/Silkscreen.ttf',
  variable: '--font-silkscreen',
  weight: '700',
  display: 'swap',
});

const mplus = localFont({
  display: 'swap',
  variable: '--font-mplus',
  weight: '1 1000',
  src: '../../assets/fonts/MPLUS1p-Medium.ttf',
});

export const fonts = {
  silkscreen,
  mplus,
};
