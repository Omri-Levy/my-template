import { FunctionComponent, useContext } from 'react';
import { FaUserCog } from 'react-icons/all';
import { useQuery } from 'react-query';
import { Redirect } from 'react-router-dom';
import { User } from '@my-template/shared';
import { Heading } from '@chakra-ui/react';
import Page from '../Page';
import fetchGetUsers from '../../../utils/api/fetchGetUsers';
import useTableColumns from './hooks/useTableColumns';
import useTableData from './hooks/useTableData';
import Table from '../../Table';
import useIsAdmin from '../../../hooks/useIsAdmin';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';

/**
 * TODO: update description
 */
const AdminPanel: FunctionComponent = () => {
  const { data: users } = useQuery(`users`, fetchGetUsers);
  const { currentUser } = useContext(AuthenticationContext);
  let currentUserId: string | User | undefined;

  if (currentUser !== `unauthenticated`) {
    currentUserId = currentUser?.id;
  }

  const filteredUsers = users?.filter((user) => user.id !== currentUserId);
  const columns = useTableColumns();
  const data = useTableData(filteredUsers);
  const isAdmin = useIsAdmin();

  if (!isAdmin) {
    return <Redirect to={{ pathname: `/` }} />;
  }

  return (
    <Page title={`Admin Panel`} icon={FaUserCog}>
      {data.length > 0 ? (
        <Table
          data={data}
          columns={columns}
          minWidth={`80vw`}
          caption={`Manage Users`}
        />
      ) : (
        <Heading as={`h2`}>No users were found.</Heading>
      )}
    </Page>
  );
};

export default AdminPanel;
