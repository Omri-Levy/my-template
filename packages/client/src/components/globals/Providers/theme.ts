import { extendTheme } from '@chakra-ui/react';

type Mode = `light` | `dark` | undefined;
const mode = (localStorage.getItem(`chakra-ui-color-mode`) as Mode) || `light`;
const config = {
  initialColorMode: mode,
  useSystemColorMode: false,
};
const styles = {
  global: {
    'html, body, #root': {
      height: `100%`,
    },
    '.chakra-toast__inner': {
      mt: `120px !important`,
    },
  },
};
const theme = extendTheme({ config, styles });

export default theme;
