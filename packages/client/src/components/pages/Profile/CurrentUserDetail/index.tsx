import { FunctionComponent } from 'react';
import { ListIcon, ListItem } from '@chakra-ui/react';
import { Props } from './types';
import conditionalText from './conditionalText';

/**
 * a component to render a single field of the signed in user's details or
 * to be mapped - made of Chakra-UI's ListItem and ListIcon components. returns
 * an empty field if no user is authenticated.
 */
const CurrentUserDetail: FunctionComponent<Props> = ({
  objectKey,
  icon,
  iconColor,
  text,
  currentUser,
  ...props
}) => (
  <ListItem mb={2} {...props}>
    <ListIcon as={icon} color={iconColor || undefined} />
    {conditionalText(currentUser, text, objectKey)}
  </ListItem>
);

export default CurrentUserDetail;
