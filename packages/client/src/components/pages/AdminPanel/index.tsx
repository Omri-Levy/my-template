import { FunctionComponent } from 'react';
import { FaUserCog } from 'react-icons/all';
import Page from '../Page';

/**
 * TODO: update description
 */
const AdminPanel: FunctionComponent = () => (
  <Page title={`Admin Panel`} icon={FaUserCog}>
    <h1>AdminPanel</h1>
  </Page>
);

export default AdminPanel;
