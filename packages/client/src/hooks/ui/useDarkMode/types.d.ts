type HookReturns = () => {
  isDarkMode: boolean;
  darkModeColor: `white` | `gray.800`;
  darkModeColorInverted: `gray.800` | `white`;
  darkModeColorOrDefault: `white` | undefined;
  darkModeColorOrDefaultInverted: `gray.800` | undefined;
  staticDarkColor: `gray.800`;
  staticLightColor: `white`;
};

export { HookReturns };
