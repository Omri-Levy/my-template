import { FunctionComponent, memo, useEffect, useMemo } from 'react';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { useBreakpointValue } from '@chakra-ui/react';
import useCheckedItems from '../../../hooks/caching/useCheckedItems';
import fuzzyTextFilter from '../functions/fuzzyTextFilter';
import useCachedPageSize from '../../../hooks/caching/useCachedPageSize';
import useUpdatePageSize from '../../../hooks/caching/useUpdatePageSize';
import TableInstance from '../TableInstance';
import { Props } from '../types';

const TableController: FunctionComponent<Props> = (props) => {
  const {
    ids,
    setIds,
    data,
    columns,
    setSessionStorageIds,
    tableProps,
  } = props;
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
  const controllerProps = {
    checkedItems,
    checkCheckboxInstance,
    checkAllCheckboxesInstance,
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
    pageIndex,
    rowsLength,
    tableProps: {
      ...tableProps,
      size,
    },
  };

  useEffect(() => {
    setSessionStorageIds(ids);
  }, [ids, setSessionStorageIds]);

  return <TableInstance {...controllerProps} {...props} />;
};

export default memo(TableController);
