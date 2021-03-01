import { IterableUser } from '@my-template/shared';
import { FunctionComponent } from 'react';
import { ListItemProps } from '@chakra-ui/react';

interface Props extends ListItemProps {
  objectKey: string;
  icon: FunctionComponent;
  iconColor: string;
  text: string;
  currentUser: IterableUser | null;
}

type ConditionalText = (
  currentUser: IterableUser,
  text: string,
  objectKey: string
) => string;

export { Props, ConditionalText };
