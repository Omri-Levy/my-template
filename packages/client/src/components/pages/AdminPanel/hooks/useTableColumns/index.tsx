import { useMemo } from 'react';
import { Column } from 'react-table';
import { HookReturns } from './types';

/**
 * TODO: update description
 */
const useTableColumns: HookReturns = () =>
  useMemo<
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
      },
      {
        Header: `Email`,
        accessor: `col2`,
        sortType: `basic`,
      },
      {
        Header: `First Name`,
        accessor: `col3`,
        sortType: `basic`,
      },
      {
        Header: `Last Name`,
        accessor: `col4`,
        sortType: `basic`,
      },
      {
        Header: `Role`,
        accessor: `col5`,
        sortType: `basic`,
      },
    ],
    []
  );

export default useTableColumns;
