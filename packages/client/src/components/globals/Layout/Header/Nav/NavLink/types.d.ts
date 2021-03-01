import { ListItemProps } from '@chakra-ui/react';
import { Icon } from '../../../../../../utils/types';

interface Props extends ListItemProps {
  to: string;
  text: string;
  onClick?: MouseEvent<HTMLAnchorElement>;
  icon?: Icon;
}

export { Props };
