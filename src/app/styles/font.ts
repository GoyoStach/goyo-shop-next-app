// app/fonts.ts
import { M_PLUS_1p, Silkscreen } from 'next/font/google';

const silkscreen = Silkscreen({
  subsets: ['latin'],
  variable: '--font-silkscreen',
  weight: ['400', '700'],
  display: 'swap',
  adjustFontFallback: false,
});

const mplus = M_PLUS_1p({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  variable: '--font-mplus',
  weight: ['100', '300', '400', '500', '700', '800', '900'],
});

export const fonts = {
  silkscreen,
  mplus,
};
