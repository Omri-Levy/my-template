import { HeaderGroup } from 'react-table';
import { CheckAllCheckboxes, ColumnType } from '../types';

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
  setPageSize: (number: number) => void;
  colSpan: number;
  userIds: string[];
  checkAllCheckboxes: CheckAllCheckboxes;
  checkedItems: boolean[];
}
type DeleteUser = (event: MouseEvent<HTMLButtonElement>) => Promise<void>;

export { Props, DeleteUser };
