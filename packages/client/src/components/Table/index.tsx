import { FunctionComponent, memo, useEffect, useMemo } from 'react';
import {
  Table as ChakraTable,
  TableCaption,
  useBreakpointValue
} from '@chakra-ui/react';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable
} from 'react-table';
import { Props } from './types';
import TableHead from './TableHead';
import Card from '../Card';
import TableFooter from './TableFooter';
import TableBody from './TableBody';
import fuzzyTextFilter from './functions/fuzzyTextFilter';

const Table: FunctionComponent<Props> = ({
                                           caption,
                                           data,
                                           columns,
                                           ...props
                                         }) => {
  const filterTypes = useMemo(() => ({
    fuzzyText: fuzzyTextFilter,
  }), []);
  const cachedPageSize = Number(localStorage.getItem(`pageSize`)) || 10;
  const tableInstance = useTable(
    {
      data,
      columns,
      filterTypes,
      initialState: {
        sortBy: [
          {
            id: `col1`,
            desc: true
          }
        ],
        pageSize: cachedPageSize
      },
      disableSortRemove: true
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
    state: { pageIndex, pageSize }
  } = tableInstance;
  const rowsLength = data.length + 1;
  const size = useBreakpointValue({ sm: `sm` });

  useEffect(() => {
    localStorage.setItem(`pageSize`, JSON.stringify(pageSize));
  }, [pageSize])

  return (
    <Card color={`unset`} backgroundColor={`unset`}>
      <ChakraTable size={size} {...getTableProps()} {...props}>
        <TableCaption>{caption}</TableCaption>
        <TableHead headerGroups={headerGroups}  />
        <TableBody
          getTableBodyProps={getTableBodyProps}
          page={page}
          prepareRow={prepareRow}
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
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </ChakraTable>
    </Card>
  );
};

export default memo(Table);


