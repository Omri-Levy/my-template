import { FunctionComponent } from 'react';
import { Box, BoxProps, List, Stack } from '@chakra-ui/react';
import useDarkMode from '../../hooks/useDarkMode';

const NavBox: FunctionComponent<BoxProps> = ({ children, ...props }) => {
  const { darkModeColor } = useDarkMode();

  return (
    <Box as={`nav`} backgroundColor={darkModeColor} {...props}>
      <Stack as={List} display={`grid`} placeContent={`center`} height={`100%`}>
        {children}
      </Stack>
    </Box>
  );
};

export default NavBox;
