import { BoxProps } from '@chakra-ui/react';
import { Icon, IconProps } from '../../../../../utils/types';

interface Props extends BoxProps {
  text: string;
  icon?: Icon;
  iconProps?: IconProps;
}

export { Props };
