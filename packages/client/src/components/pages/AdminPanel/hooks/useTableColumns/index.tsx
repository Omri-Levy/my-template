import { useCallback, useMemo } from 'react';
import { Column } from 'react-table';
import { Text, Tooltip, useBreakpointValue } from '@chakra-ui/react';
import { HookReturns } from './types';

/**
 * TODO: update description
 */
const useTableColumns: HookReturns = () => {
  const truncate = useBreakpointValue({ base: true, lg: false });
  const TdChild = useCallback(
    (cell) => (
      <Text
        maxWidth={{
          base: `10ch`,
          md: `20ch`,
          lg: `unset`,
        }}
        isTruncated
      >
        {truncate && <Tooltip label={cell?.value}>{cell?.value}</Tooltip>}
        {!truncate && cell?.value}
      </Text>
    ),
    [truncate]
  );

  return useMemo<
    Column<{
      col1: string;
      col2: string;
      col3: string;
      col4: string;
      col5: string;
    }>[]
  >(
    () => [
      {
        Header: `ID`,
        accessor: `col1`,
        sortType: `basic`,
        Cell: TdChild,
      },
      {
        Header: `Email`,
        accessor: `col2`,
        sortType: `basic`,
        Cell: TdChild,
      },
      {
        Header: `First Name`,
        accessor: `col3`,
        sortType: `basic`,
        Cell: TdChild,
      },
      {
        Header: `Last Name`,
        accessor: `col4`,
        sortType: `basic`,
        Cell: TdChild,
      },
      {
        Header: `Role`,
        accessor: `col5`,
        sortType: `basic`,
        Cell: TdChild,
      },
    ],
    [TdChild]
  );
};

export default useTableColumns;
