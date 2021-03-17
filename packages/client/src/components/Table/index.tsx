import { FunctionComponent, memo, useMemo } from 'react';
import { useFilters, usePagination, useSortBy, useTable } from 'react-table';
import {
  Table as ChakraTable,
  TableCaption,
  useBreakpointValue
} from '@chakra-ui/react';
import { ObjectKey } from '@my-template/shared';
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
    text: (rows: Record<ObjectKey,
      { [key: string]: string }>[], id: string, filterValue: string) => (
      rows.filter((row) => {
        const rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue)
          .toLowerCase()
          .startsWith(String(filterValue).toLowerCase()) : true;
      })
    )

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
    useFilters,
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
    setFilter,
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
          setFilter={setFilter}
        />
      </ChakraTable>
      <Pagination {...pagination} />
    </Card>
  );
};

export default memo(Table);


