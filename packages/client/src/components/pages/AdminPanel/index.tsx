import { FunctionComponent } from 'react';
import { FaUserCog } from 'react-icons/all';
import { Flex } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Page from '../Page';
import Table from '../../Table';
import useTableData from './hooks/useTableData';
import useTableColumns from './hooks/useTableColumns';
import fetchGetUsers from '../../../utils/api/fetchGetUsers';

/**
 * TODO: update description
 */
const AdminPanel: FunctionComponent = () => {
  const columns = useTableColumns();
  const { isLoading, data: users } = useQuery(`users`, fetchGetUsers);
  const tableData = isLoading ? [] : users;
  const data = useTableData(tableData);

  return (
    <Page title={`Admin Panel`} icon={FaUserCog}>
      <Flex flexDirection={`column`} alignItems={`center`}>
        <Table
          minWidth={815}
          caption={`Manage Users`}
          data={data}
          columns={columns}
        />
      </Flex>
    </Page>
  );
};

export default AdminPanel;
