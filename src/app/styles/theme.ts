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
      color: mode('cappucino.800', 'cappucino.100')(props),
      bg: mode('cappucino.100', 'cappucino.800')(props),
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
    cappucino: {
      50: '#f6f4eb',
      100: '#e1ddd1',
      200: '#ccc6b5',
      300: '#b8af97',
      400: '#a49879',
      500: '#8a7e5f',
      600: '#6b624a',
      700: '#4c4634',
      800: '#2C3639',
      900: '#110e03',
    },
    accent: {
      50: '#fff2e1',
      100: '#f4dbbb',
      200: '#ebc393',
      300: '#e2ab6a',
      400: '#d99340',
      500: '#c07928',
      600: '#955e1d',
      700: '#6b4314',
      800: '#412708',
      900: '#1a0b00',
    },
  },
  styles: styles,
});

export default theme;
