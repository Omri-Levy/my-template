import { FunctionComponent } from 'react';
import { ListIcon, ListItem } from '@chakra-ui/react';
import { Props } from './types';

const CurrentUserDetail: FunctionComponent<Props> = ({
  objectKey,
  icon,
  text,
  currentUser,
}) => (
  <ListItem textTransform={objectKey === `role` ? `capitalize` : undefined}>
    <ListIcon as={icon} color={`gray.300`} />
    {`${text}: ${currentUser && currentUser[objectKey]}`}
  </ListItem>
);

export default CurrentUserDetail;
