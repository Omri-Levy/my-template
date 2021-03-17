import { useMemo } from 'react';
import { Column } from 'react-table';
import { HookReturns } from './types';

/**
 * TODO: update description
 */
const useTableColumns: HookReturns = () =>
  useMemo<Column<{
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
  }>[]>(
    () => [
      {
        Header: `ID`,
        accessor: `col1`,
        sortType: `basic`,
        filter: `fuzzyText`
      },
      {
        Header: `Email`,
        accessor: `col2`,
        sortType: `basic`,
        filter: `fuzzyText`
      },
      {
        Header: `First Name`,
        accessor: `col3`,
        sortType: `basic`,
        filter: `fuzzyText`
      },
      {
        Header: `Last Name`,
        accessor: `col4`,
        sortType: `basic`,
        filter: `fuzzyText`
      },
      {
        Header: `Role`,
        accessor: `col5`,
        sortType: `basic`,
        filter: `fuzzyText`
      }
    ],
    []
  );

export default useTableColumns;
