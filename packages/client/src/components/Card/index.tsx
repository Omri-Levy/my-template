import { Box, BoxProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import useDarkMode from '../../hooks/ui/useDarkMode';

const Card: FunctionComponent<BoxProps> = ({ children, ...props }) => {
  const { darkModeColor, darkModeColorInverted } = useDarkMode();

  return (
    <Box
      backgroundColor={darkModeColor}
      color={darkModeColorInverted}
      borderRadius={5}
      border={`1px solid darken(0.3, ${darkModeColor})`}
      boxShadow={`-2px 2px 1.5rem rgba(0, 0, 0, 0.3)`}
      padding={5}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
