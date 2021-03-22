import { FunctionComponent, useContext } from 'react';
import { FaIdCard } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import Page from '../Page';
import Card from '../../Card';
import CurrentUserDetails from './CurrentUserDetails';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';

/**
 * a route wrapped with the Page component to display the currently
 * authenticated user's details.
 */
const Profile: FunctionComponent = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (!isAuthenticated) {
    return <Redirect to={{ pathname: `/` }} />;
  }

  return (
    <Page title={`Profile`} icon={FaIdCard}>
      <Card color={`unset`} backgroundColor={`unset`} mt={100}>
        <CurrentUserDetails />
      </Card>
    </Page>
  );
};

export default Profile;
