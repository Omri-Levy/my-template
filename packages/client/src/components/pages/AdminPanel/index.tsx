import { FunctionComponent } from 'react';
import { FaUserCog } from 'react-icons/all';
import { useQuery } from 'react-query';
import Page from '../Page';
import fetchGetUsers from '../../../utils/api/fetchGetUsers';
import useTableColumns from './hooks/useTableColumns';
import useTableData from './hooks/useTableData';
import Table from '../../Table';

/**
 * TODO: update description
 */
const AdminPanel: FunctionComponent = () => {
  const { data: users } = useQuery(`users`, fetchGetUsers);
  const columns = useTableColumns();
  const data = useTableData(users);

  return (
    <Page title={`Admin Panel`} icon={FaUserCog}>
        <Table
          data={data}
          columns={columns}
          minWidth={`80vw`}
          caption={`Manage Users`}
        />
    </Page>
  );
};

export default AdminPanel;
