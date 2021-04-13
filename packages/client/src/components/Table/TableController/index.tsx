import { FunctionComponent, memo, useEffect, useMemo, useState } from 'react';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { useBreakpointValue } from '@chakra-ui/react';
import { chunk } from 'lodash';
import useCheckedItems from '../../../hooks/caching/useCheckedItems';
import fuzzyTextFilter from '../functions/fuzzyTextFilter';
import useCachedPageSize from '../../../hooks/caching/useCachedPageSize';
import useUpdatePageSize from '../../../hooks/caching/useUpdatePageSize';
import TableInstance from '../TableInstance';
import { Props } from '../types';
import useLocalStorage from '../../../hooks/caching/useLocalStorage';
import useColumnsAmount from '../../../hooks/responsiveness/useColumnsAmount';
import useIsMobile from '../../../hooks/responsiveness/useIsMobile';

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
    setLocalStorage: setCachedGlobalFilter,
    getLocalStorage: getCachedGlobalFilter,
  } = useLocalStorage(`filterBy`);
  const cachedGlobalFilter = getCachedGlobalFilter(``)();
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
        globalFilter: cachedGlobalFilter,
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
  const rowsLength = data?.length + 1;
  const size = useBreakpointValue({ sm: `sm` });
  const {
    getLocalStorage: getCachedCurrentColumns,
    setLocalStorage: setCachedCurrentColumns,
  } = useLocalStorage(`currentColumns`);
  const cachedCurrentColumns = getCachedCurrentColumns(0)() as number;
  const [currentColumns, setCurrentColumns] = useState(cachedCurrentColumns);
  const headerGroupsCopy = [...headerGroups];
  const headers = headerGroupsCopy[0]?.headers?.map(
    (column) => (column?.Header as string) || ``
  );
  const columnsAmount = useColumnsAmount();
  const headerChunks = chunk(headers, columnsAmount);
  const columnsChunks =
    [
      ...headerChunks?.map((headerChunk) => ({
        label: `${headerChunk[0]} ${headerChunk[1] ? `&` : ``} ${
          headerChunk[1] || ``
        }`,
      })),
    ] || columns;
  const isMobile = useIsMobile();
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
    isMobile,
    headerChunks,
    columnsChunks,
    currentColumns,
    setCurrentColumns,
    setCachedCurrentColumns,
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

  useEffect(() => {
    setCachedGlobalFilter(globalFilter);
  }, [globalFilter, setCachedGlobalFilter]);

  useEffect(() => {
    setCachedCurrentColumns(currentColumns);
  }, [currentColumns, setCachedCurrentColumns, setCurrentColumns]);

  return <TableInstance {...controllerProps} {...props} />;
};

export default memo(TableController);
