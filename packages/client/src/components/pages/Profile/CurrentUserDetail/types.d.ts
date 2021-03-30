import { User, UserKey } from '@my-template/shared';
import { FunctionComponent } from 'react';
import { DividerProps, ListItemProps } from '@chakra-ui/react';

interface Props extends ListItemProps {
  objectKey: UserKey;
  icon: FunctionComponent;
  iconColor?: string;
  text: string;
  currentUser: User;
  dividerProps?: DividerProps;
}

type ConditionalText = (
  currentUser: User,
  text: string,
  objectKey: UserKey
) => string;

export { Props, ConditionalText };
