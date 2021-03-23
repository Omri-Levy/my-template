import { FunctionComponent, memo } from 'react';
import {
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  Icon,
  Td,
  Text,
  Tfoot,
  Tr,
} from '@chakra-ui/react';
import { v4 } from 'uuid';
import { FaTrashAlt } from 'react-icons/all';
import { Users } from '@my-template/shared';
import { DeleteUser, Props } from './types';
import GlobalFilter from '../GlobalFilter';
import useDarkMode from '../../../hooks/ui/useDarkMode';
import fetchDeleteUser from '../../../utils/api/fetchDeleteUser';
import queryClient from '../../globals/Providers/queryClient';
import DeleteAllUsersModal from './DeleteAllUsersModal';
import Pagination from '../Pagination';

const TableFooter: FunctionComponent<Props> = ({
  footerGroups,
  globalFilter,
  setGlobalFilter,
  rowsLength,
  pageIndex,
  pageCount,
  gotoPage,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  setPageSize,
  colSpan,
  userIds,
  checkAllCheckboxes,
  checkedItems,
}) => {
  const { isDarkMode } = useDarkMode();
  const borderColor = isDarkMode ? `#2D3748` : `#EDF2F7`;
  const deleteSelectedUsers: DeleteUser = async () => {
    await fetchDeleteUser(userIds);
  };
  const users = queryClient.getQueryData(`users`) as Users;

  return (
    <Tfoot>
      {footerGroups?.map((group) => (
        <Tr {...group?.getFooterGroupProps()} key={v4()}>
          {group?.headers?.map((column) => (
            <Td {...column?.getFooterProps()} key={v4()}>
              {column?.render(`Footer`)}
            </Td>
          ))}
          {users?.length > 1 && (
            <Td>
              <Checkbox
                mb={1}
                isChecked={checkedItems.every(Boolean)}
                onChange={checkAllCheckboxes}
              >
                <Text mt={1}>Select All</Text>
              </Checkbox>
            </Td>
          )}
        </Tr>
      ))}
      <Tr>
        <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <Td borderLeft={`1px solid ${borderColor}`} colSpan={colSpan}>
          <Flex justifyContent={`flex-end`}>
            <ButtonGroup spacing={5}>
              <Button
                leftIcon={<Icon as={FaTrashAlt} />}
                onClick={userIds.length > 0 ? deleteSelectedUsers : undefined}
                disabled={!checkedItems.some(Boolean)}
              >
                Delete
              </Button>
              {users?.length > 1 && <DeleteAllUsersModal />}
            </ButtonGroup>
          </Flex>
        </Td>
      </Tr>
      <Pagination
        colSpan={colSpan}
        pageIndex={pageIndex}
        pageCount={pageCount}
        rowsLength={rowsLength}
        gotoPage={gotoPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        previousPage={previousPage}
        nextPage={nextPage}
        setPageSize={setPageSize}
      />
    </Tfoot>
  );
};

export default memo(TableFooter);
