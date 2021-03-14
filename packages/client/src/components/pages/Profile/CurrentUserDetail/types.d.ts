import { IterableUser } from '@my-template/shared';
import { FunctionComponent } from 'react';
import { DividerProps, ListItemProps } from '@chakra-ui/react';

interface Props extends ListItemProps {
  objectKey: string;
  icon: FunctionComponent;
  iconColor?: string;
  text: string;
  currentUser: IterableUser;
  dividerProps?: DividerProps;
}

type ConditionalText = (
  currentUser: IterableUser,
  text: string,
  objectKey: string
) => string;

export { Props, ConditionalText };
