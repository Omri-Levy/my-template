import { FunctionComponent, lazy, Suspense } from 'react';
import { FaUserCog } from 'react-icons/all';
import { Flex } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import Page from '../Page';
import fetchGetUsers from '../../../utils/api/fetchGetUsers';
import useTableColumns from './hooks/useTableColumns';
import useTableData from './hooks/useTableData';
import Loading from '../../globals/Loading';

/**
 * TODO: update description
 */
const AdminPanel: FunctionComponent = () => {
  const { data: users } = useQuery(`users`, fetchGetUsers);
  const columns = useTableColumns();
  const data = useTableData(users);
  const Table = lazy(() => import(`../../Table`));

  return (
    <Page title={`Admin Panel`} icon={FaUserCog}>
      <Flex flexDirection={`column`} alignItems={`center`}>
        <Suspense fallback={<Loading suspense />}>
        <Table
          data={data}
          columns={columns}
          minWidth={`80vw`}
          caption={`Manage Users`}
        />
        </Suspense>
      </Flex>
    </Page>
  );
};

export default AdminPanel;
