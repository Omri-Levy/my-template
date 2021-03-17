import { FunctionComponent, memo, useMemo } from 'react';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable
} from 'react-table';
import {
  Table as ChakraTable,
  TableCaption,
  useBreakpointValue
} from '@chakra-ui/react';
import { Props } from './types';
import TableHead from './TableHead';
import Card from '../Card';
import TableFooter from './TableFooter';
import TableBody from './TableBody';
import Pagination from './Pagination';
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
  const size = useBreakpointValue({ sm: `sm` });
  const tableInstance = useTable(
    {
      data,
      columns,
      filterTypes,
      initialState: {
        // eslint-disable-next-line
        // @ts-ignore
        sortBy: [
          {
            id: `col1`,
            desc: true
          }
        ]
      },
      disableSortRemove: true
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    footerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    globalFilter,
    setGlobalFilter,
    state: { pageIndex, pageSize }
  } = tableInstance;
  const rowsLength = data.length + 1;
  const pagination = {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    pageIndex,
    pageSize,
    rowsLength
  };

  return (
    <Card color={`unset`} backgroundColor={`unset`}>
      <ChakraTable size={size} {...getTableProps()} {...props}>
        <TableCaption>{caption}</TableCaption>
        <TableHead headerGroups={headerGroups} />
        <TableBody
          getTableBodyProps={getTableBodyProps}
          page={page}
          prepareRow={prepareRow}
        />
        <TableFooter
          footerGroups={footerGroups}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </ChakraTable>
      <Pagination {...pagination} />
    </Card>
  );
};

export default memo(Table);


