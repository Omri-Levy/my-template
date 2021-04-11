import { HeaderGroup } from 'react-table';
import { CheckAllCheckboxes, ColumnType } from '../types';

interface Props {
  footerGroups: HeaderGroup<ColumnType>[];
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  rowsLength: number;
  pageCount: number;
  pageIndex: number;
  pageSize: number;
  gotoPage: (number: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  setPageSize: (number: number) => void;
  colSpan?: number;
  checkAllCheckboxes: CheckAllCheckboxes;
  allCheckboxesChecked: boolean;
  Actions: JSX.Element;
  currentColumns: number;
}
type DeleteUser = (event: MouseEvent<HTMLButtonElement>) => Promise<void>;

export { Props, DeleteUser };
