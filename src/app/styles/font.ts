// app/fonts.ts
import { Silkscreen, M_PLUS_1p } from 'next/font/google';

const silkscreen = Silkscreen({
  subsets: ['latin'],
  variable: '--font-silkscreen',
  weight: ['400', '700'],
});

const mplus = M_PLUS_1p({
  subsets: ['latin'],
  variable: '--font-mplus',
  weight: ['100', '300', '400', '500', '700', '800', '900'],
});

export const fonts = {
  silkscreen,
  mplus,
};
