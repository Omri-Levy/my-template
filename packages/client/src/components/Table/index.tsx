import { FunctionComponent, memo, useEffect, useMemo, useState } from 'react';
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
import { CheckAllCheckboxes, CheckCheckbox, Props } from './types';
import TableHead from './TableHead';
import Card from '../Card';
import TableFooter from './TableFooter';
import TableBody from './TableBody';
import fuzzyTextFilter from './functions/fuzzyTextFilter';

/**
 * refactor to smaller abstractions
 */
const Table: FunctionComponent<Props> = ({
  caption,
  data,
  columns,
  ...props
}) => {
  const [checkedItems, setCheckedItems] = useState(
    () => JSON.parse(localStorage.getItem(`checkedItems`) as string) || [false]
  );
  const [userIds, setUserIds] = useState<string[]>(
    () => JSON.parse(localStorage.getItem(`userIds`) as string) || []
  );
  const filterTypes = useMemo(
    () => ({
      fuzzyText: fuzzyTextFilter,
    }),
    []
  );
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
  const rowsLength = data.length + 1;
  const size = useBreakpointValue({ sm: `sm` });
  const checkCheckbox: CheckCheckbox = (id, index) => (event) => {
    const newState = [...checkedItems];
    newState[index] = event.target.checked;

    setCheckedItems(newState);

    if (checkedItems[index]) {
      const newUserIds = userIds.filter((userId) => userId !== id);

      setUserIds(newUserIds);
    } else {
      setUserIds([...userIds, id]);
    }
  };
  const checkAllCheckboxes: CheckAllCheckboxes = () => {
    let newState: boolean[] = [];

    checkedItems.forEach(() => {
      newState = [...newState, !checkedItems.every(Boolean)];
    });

    setCheckedItems(newState);

    if (checkedItems.every(Boolean)) {
      setUserIds([]);
    } else {
      let newUserIds: string[] = [];

      data.forEach((item) => {
        newUserIds = [...newUserIds, item.col1];
      });

      setUserIds(newUserIds);
    }
  };

  useEffect(() => {
    localStorage.setItem(`pageSize`, JSON.stringify(pageSize));
  }, [pageSize]);
  useEffect(() => {
    sessionStorage.setItem(`checkedItems`, JSON.stringify(checkedItems));
  }, [checkedItems]);
  useEffect(() => {
    sessionStorage.setItem(`userIds`, JSON.stringify(userIds));
  }, [userIds]);

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
            checkCheckbox={checkCheckbox}
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
            userIds={userIds}
            checkAllCheckboxes={checkAllCheckboxes}
            checkedItems={checkedItems}
          />
        </ChakraTable>
      </Card>
    </Flex>
  );
};

export default memo(Table);
