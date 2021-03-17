import { FunctionComponent } from 'react';
import { FaIdCard } from 'react-icons/fa';
import Page from '../Page';
import Card from '../../Card';
import CurrentUserDetails from './CurrentUserDetails';

/**
 * a route wrapped with the Page component to display the currently
 * authenticated user's details.
 */
const Profile: FunctionComponent = () => (
  <Page title={`Profile`} icon={FaIdCard}>
    <Card color={`unset`} backgroundColor={`unset`} mt={100}>
      <CurrentUserDetails />
    </Card>
  </Page>
);

export default Profile;
