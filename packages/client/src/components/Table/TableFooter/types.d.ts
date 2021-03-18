import { HeaderGroup } from 'react-table';
import { ColumnType } from '../types';

interface Props {
  footerGroups: HeaderGroup<ColumnType>[];
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  rowsLength: number;
  pageCount: number;
  pageIndex: number;
  gotoPage: (number: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  pageSize: number;
  setPageSize: (number: number) => void;
}

export { Props };
