import { FunctionComponent, useContext, useMemo } from 'react';
import { List } from '@chakra-ui/react';
import { v4 } from 'uuid';
import Page from '../Page';
import AuthenticationContext from '../../../context/Authentication/AuthenticationContext';
import currentUserDetails from './currentUserDetails';
import CurrentUserDetail from './CurrentUserDetail';

/**
 * a route wrapped with the Page component to display the currently
 * authenticated user's details.
 */
const Profile: FunctionComponent = () => {
  const { currentUser } = useContext(AuthenticationContext);
  const memoizedDetails = useMemo(() => currentUserDetails, []);

  return (
    <Page title={`Profile`}>
      <List variant={`filled`}>
        {memoizedDetails.map((memoizedDetail) => {
          const { objectKey, icon, text } = memoizedDetail;

          return (
            <CurrentUserDetail
              key={v4()}
              objectKey={objectKey}
              icon={icon}
              iconColor={`gray.300`}
              text={text}
              currentUser={currentUser}
              textTransform={objectKey === `role` ? `capitalize` : undefined}
            />
          );
        })}
      </List>
    </Page>
  );
};

export default Profile;
