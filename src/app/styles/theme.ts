import {
  StyleFunctionProps,
  extendTheme,
  type ThemeConfig,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('expresso.700', 'expresso.100')(props),
      bg: mode('expresso.100', 'expresso.700')(props),
    },
  }),
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: `var(--font-silkscreen)`,
    body: `var(--font-mplus)`,
  },
  colors: {
    brand: {
      50: '#f6f4eb',
      100: '#e1ddd1',
      200: '#ccc6b5',
      300: '#b8af97',
      400: '#a49879',
      500: '#8a7e5f',
      600: '#6b624a',
      700: '#4c4634',
      800: '#2e2a1e',
      900: '#110e03',
    },
    expresso: {
      50: '#f6f4eb',
      100: '#DCD7C9',
      150: '#ccc6b5',

      250: '#ebc393',
      300: '#DEA057',
      350: '#d99340',

      450: '#ac896d',
      500: '#A27B5C',
      550: '#735640',

      650: '#3F4E4F',
      700: '#2C3639',
      750: '#110e03',
    },
  },
  styles: styles,
});

export default theme;
