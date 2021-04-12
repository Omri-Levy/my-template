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
import useLocalStorage from '../../../hooks/caching/useLocalStorage';

const TableController: FunctionComponent<Props> = (props) => {
  const {
    ids,
    allIds,
    setIds,
    data,
    columns,
    setSessionStorageIds,
    tableProps,
  } = props;
  const {
    isChecked,
    allCheckboxesChecked,
    checkCheckbox,
    checkAllCheckboxes,
  } = useCheckedItems(allIds, ids, setIds);
  const filterTypes = useMemo(
    () => ({
      fuzzyText: fuzzyTextFilter,
    }),
    []
  );
  const { cachedPageSize } = useCachedPageSize();
  const { getLocalStorage, setLocalStorage } = useLocalStorage(`pageIndex`);
  const {
    getLocalStorage: getCachedOrder,
    setLocalStorage: setCachedOrder,
  } = useLocalStorage(`sortBy`);
  const cachedOrder = getCachedOrder([
    {
      id: `col1`,
      desc: true,
    },
  ])() as [{ id: string; desc: boolean }];
  const tableInstance = useTable(
    {
      data,
      columns,
      filterTypes,
      initialState: {
        sortBy: cachedOrder,
        pageSize: cachedPageSize,
        pageIndex: Number(getLocalStorage(0)() as string),
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
    state: { pageIndex, pageSize, sortBy },
  } = tableInstance;
  useUpdatePageSize(pageSize);
  const rowsLength = data.length + 1;
  const size = useBreakpointValue({ sm: `sm` });
  const controllerProps = {
    checkCheckbox,
    checkAllCheckboxes,
    allCheckboxesChecked,
    isChecked,
    getTableProps,
    headerGroups,
    getTableBodyProps,
    page,
    prepareRow,
    footerGroups,
    globalFilter,
    setGlobalFilter,
    pageCount,
    pageSize,
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

  /**
   * TODO: turn into reusable hooks
   */
  useEffect(() => {
    setSessionStorageIds(ids);
  }, [ids, setSessionStorageIds]);

  useEffect(() => {
    setLocalStorage(pageIndex);
  }, [pageIndex, setLocalStorage]);

  useEffect(() => {
    setCachedOrder(sortBy);
  }, [sortBy, setCachedOrder]);

  return <TableInstance {...controllerProps} {...props} />;
};

export default memo(TableController);
