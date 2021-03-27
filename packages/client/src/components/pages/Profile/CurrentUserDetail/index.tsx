import { FunctionComponent } from 'react';
import { Divider, ListIcon, ListItem } from '@chakra-ui/react';
import { Props } from './types';
import conditionalText from './conditionalText';
import useDarkMode from '../../../../hooks/ui/useDarkMode';

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
  dividerProps,
  ...props
}) => {
  const { darkModeColorInverted } = useDarkMode();

  return (
    <>
      <ListItem {...props}>
        <ListIcon as={icon} color={iconColor} mb={0.5} />
        {conditionalText(currentUser, text, objectKey)}
      </ListItem>
      <Divider
        orientation={`horizontal`}
        backgroundColor={darkModeColorInverted}
        {...dividerProps}
      />
    </>
  );
};

export default CurrentUserDetail;
