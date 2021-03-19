import { FunctionComponent, memo } from 'react';
import {
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  Td,
  Text,
  Tfoot,
  Tr
} from '@chakra-ui/react';
import { v4 } from 'uuid';
import { DeleteUser, Props } from './types';
import GlobalFilter from '../GlobalFilter';
import Pagination from '../Pagination';
import useDarkMode from '../../../hooks/ui/useDarkMode';
import fetchDeleteUser from '../../../utils/api/fetchDeleteUser';

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
  checkedItems
                                               }) =>  {
  const {isDarkMode} = useDarkMode();
  const borderColor = isDarkMode ? `#2D3748` :
    `#EDF2F7`;
  const deleteUser: DeleteUser = async () => {
    await fetchDeleteUser(userIds);
  };

  return (
    <Tfoot>
      {footerGroups?.map((group) => (
        <Tr {...group?.getFooterGroupProps()} key={v4()}>
          {group?.headers?.map((column) => (
            <Td {...column?.getFooterProps()} key={v4()}>
              {column?.render(`Footer`)}
            </Td>
          ))}
          <Td>
            <Checkbox
              mb={1}
              isChecked={checkedItems.every(Boolean)}
              onChange={checkAllCheckboxes}
            >
              <Text mt={1}>Select All</Text>
            </Checkbox>
          </Td>
        </Tr>
      ))}
        <Tr>
          <GlobalFilter
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <Td
            borderLeft={`1px solid ${borderColor}`}
            colSpan={colSpan}
          >
            <Flex justifyContent={`flex-end`}>
            <ButtonGroup spacing={5}>
          <Button onClick={userIds.length > 0
            ? deleteUser
            : undefined}
          >
            Delete
          </Button>
          <Button
            onClick={() => alert(`YEET`)}
          >
            Delete All
          </Button>
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
}

export default memo(TableFooter);

