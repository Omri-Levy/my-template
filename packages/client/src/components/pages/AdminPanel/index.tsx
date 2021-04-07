import { FunctionComponent, useContext } from 'react';
import { FaUserCog } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { Redirect } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import { UserObject } from '@my-template/shared';
import Page from '../Page';
import fetchGetUsers from '../../../utils/api/fetchGetUsers';
import useTableColumns from './hooks/useTableColumns';
import useTableData from './hooks/useTableData';
import Table from '../../Table';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';
import NoUserFound from '../../NoUserFound';
import AdminActions from './AdminActions';
import useUserIds from '../../../hooks/useUserIds';
import AuthorizationContext from '../../../context/AuthorizationContext/AuthorizationContext';

/**
 * TODO: update description
 */
const AdminPanel: FunctionComponent = () => {
  const { data: users } = useQuery(`users`, fetchGetUsers);
  const { currentUser } = useContext(AuthenticationContext);
  const authenticatedUser = currentUser as UserObject;
  const filteredUsers = users?.filter(
    (user) => user?.id !== authenticatedUser?.id
  );
  const columns = useTableColumns();
  const data = useTableData(filteredUsers);
  const { isAuthorized } = useContext(AuthorizationContext);
  const {
    setUserIds: setSessionStorageUserIds,
    userIds,
    _setUserIds,
  } = useUserIds();
  const actionsProps = {
    ids: userIds,
  };

  if (!isAuthorized) {
    return <Redirect to={{ pathname: `/` }} />;
  }

  if (!currentUser) {
    return <NoUserFound />;
  }

  return (
    <Page title={`Admin Panel`} icon={FaUserCog}>
      {data.length > 0 ? (
        <Table
          data={data}
          columns={columns}
          minWidth={`80vw`}
          caption={`Manage Users`}
          Actions={AdminActions}
          actionsProps={actionsProps}
          ids={userIds}
          setIds={_setUserIds}
          setSessionStorageIds={setSessionStorageUserIds}
        />
      ) : (
        <Heading as={`h2`}>No users were found.</Heading>
      )}
    </Page>
  );
};

export default AdminPanel;
