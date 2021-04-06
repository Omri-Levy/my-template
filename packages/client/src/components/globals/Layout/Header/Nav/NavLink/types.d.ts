import { ListItemProps } from '@chakra-ui/react';
import { ChakraColorScheme, Icon } from '../../../../../../utils/types';

interface Props extends ListItemProps {
  to: string;
  text: string;
  onClick?: MouseEvent<HTMLAnchorElement>;
  icon?: Icon;
  exact: boolean;
  activeColor?: ChakraColorScheme;
}

export { Props };
