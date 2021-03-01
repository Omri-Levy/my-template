import { FunctionComponent } from 'react';
import { ListIcon, ListItem, Text } from '@chakra-ui/react';
import { Props } from './types';

/**
 * a component to render a single field of the signed in user's details or
 * to be mapped - made of Chakra-UI's ListItem, ListIcon and, Text
 * components. Returns an empty field if no user is authenticated.
 */
const CurrentUserDetail: FunctionComponent<Props> = ({
  objectKey,
  icon,
  text,
  currentUser,
}) => (
  <ListItem textTransform={objectKey === `role` ? `capitalize` : undefined}>
    <ListIcon as={icon} color={`gray.300`} />
    <Text>
      {`${text}: ${
        currentUser &&
        currentUser !== `unauthenticated` &&
        currentUser[objectKey]
      }`}
    </Text>
  </ListItem>
);

export default CurrentUserDetail;
