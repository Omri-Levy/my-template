import { extendTheme } from '@chakra-ui/react';

type Mode = `light` | `dark` | undefined;
const mode: Mode = `light`;
const config = {
  initialColorMode: mode,
  useSystemColorMode: false,
};
const styles = {
  global: {
    "html, body, #root": {
      height: `100%`
    },
  },
};
const theme = extendTheme({ config, styles });

export default theme;
