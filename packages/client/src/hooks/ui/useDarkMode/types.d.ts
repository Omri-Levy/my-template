type HookReturns = () => {
  isDarkMode: boolean;
  darkModeColor: `gray.50` | `gray.900`;
  darkModeColorInverted: `gray.900` | `gray.50`;
  darkModeColorOrDefault: `gray.50` | undefined;
  darkModeColorOrDefaultInverted: `gray.900` | undefined;
  darkModeScheme: `whiteAlpha` | `blackAlpha`;
};

export { HookReturns };
