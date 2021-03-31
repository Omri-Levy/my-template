import { FunctionComponent, memo, useEffect, useMemo } from 'react';
import {
  Flex,
  Table as ChakraTable,
  TableCaption,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { Props } from './types';
import TableHead from './TableHead';
import Card from '../Card';
import TableFooter from './TableFooter';
import TableBody from './TableBody';
import fuzzyTextFilter from './functions/fuzzyTextFilter';
import useCheckedItems from '../../hooks/useCheckedItems';
import useCachedPageSize from '../../hooks/useCachedPageSize';
import useUpdatePageSize from '../../hooks/useUpdatePageSize';

/**
 * refactor to smaller abstractions
 */
const Table: FunctionComponent<Props> = ({
  caption,
  data,
  columns,
  ids,
  setIds,
  Actions,
  actionsProps,
  setSessionStorageIds,
  ...props
}) => {
  const { checkedItems, checkCheckbox, checkAllCheckboxes } = useCheckedItems(
    setIds
  );
  const checkCheckboxInstance = checkCheckbox(ids, setIds);
  const checkAllCheckboxesInstance = checkAllCheckboxes(data);
  const filterTypes = useMemo(
    () => ({
      fuzzyText: fuzzyTextFilter,
    }),
    []
  );
  const { cachedPageSize } = useCachedPageSize();
  const tableInstance = useTable(
    {
      data,
      columns,
      filterTypes,
      initialState: {
        sortBy: [
          {
            id: `col1`,
            desc: true,
          },
        ],
        pageSize: cachedPageSize,
      },
      disableSortRemove: true,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    page,
    prepareRow,
    footerGroups,
    globalFilter,
    setGlobalFilter,
    pageCount,
    gotoPage,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;
  useUpdatePageSize(pageSize);
  const rowsLength = data.length + 1;
  const size = useBreakpointValue({ sm: `sm` });

  useEffect(() => {
    setSessionStorageIds(ids);
  }, [ids, setSessionStorageIds]);

  return (
    <Flex flexDirection={`column`} alignItems={`center`}>
      <Card color={`unset`} backgroundColor={`unset`}>
        <ChakraTable size={size} {...getTableProps()} {...props}>
          <TableCaption>{caption}</TableCaption>
          <TableHead headerGroups={headerGroups} />
          <TableBody
            getTableBodyProps={getTableBodyProps}
            page={page}
            prepareRow={prepareRow}
            checkCheckbox={checkCheckboxInstance}
            checkedItems={checkedItems}
          />
          <TableFooter
            footerGroups={footerGroups}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            pageIndex={pageIndex}
            pageCount={pageCount}
            rowsLength={rowsLength}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            gotoPage={gotoPage}
            previousPage={previousPage}
            nextPage={nextPage}
            setPageSize={setPageSize}
            colSpan={columns.length + 1}
            checkAllCheckboxes={checkAllCheckboxesInstance}
            checkedItems={checkedItems}
            Actions={<Actions {...actionsProps} checkedItems={checkedItems} />}
          />
        </ChakraTable>
      </Card>
    </Flex>
  );
};

export default memo(Table);
