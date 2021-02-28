import { ListItemProps } from '@chakra-ui/react';

interface Props extends ListItemProps {
  to: string;
  text: string;
  onClick?: MouseEvent<HTMLAnchorElement>;
}

export { Props };
