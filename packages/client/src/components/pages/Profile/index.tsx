import { FunctionComponent, useContext, useMemo } from 'react';
import { List } from '@chakra-ui/react';
import { v4 } from 'uuid';
import { FaIdCard } from 'react-icons/fa';
import Page from '../Page';
import currentUserDetails from './currentUserDetails';
import CurrentUserDetail from './CurrentUserDetail';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';

/**
 * a route wrapped with the Page component to display the currently
 * authenticated user's details.
 */
const Profile: FunctionComponent = () => {
  const memoizedDetails = useMemo(() => currentUserDetails, []);
  const { currentUser } = useContext(AuthenticationContext);
  console.log(currentUser);

  return (
    <Page title={`Profile`} icon={FaIdCard}>
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
