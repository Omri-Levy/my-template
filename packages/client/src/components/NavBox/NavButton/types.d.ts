import { ButtonProps, ComponentWithAs, IconProps } from '@chakra-ui/react';
import { ChakraColorScheme, Icon } from '../../../utils/types';

interface Props extends ButtonProps {
  to: string;
  text: string;
  icon?: Icon;
  iconProps?: ComponentWithAs<`svg`, IconProps>;
  activeColor?: ChakraColorScheme;
}

export { Props };
