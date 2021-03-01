import { ButtonProps } from '@chakra-ui/react';
import { Icon } from '../../../utils/types';

interface Props extends ButtonProps {
  to: string;
  text: string;
  icon?: Icon;
  iconProps?: IconProps;
}

export { Props };
