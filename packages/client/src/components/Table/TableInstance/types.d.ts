import {
  HeaderGroup,
  Row,
  TableBodyPropGetter,
  TableBodyProps,
} from 'react-table';
import {
  CheckAllCheckboxes,
  CheckCheckbox,
  ColumnType,
  Props as TableProps,
} from '../types';

type FooterGroups<D> = HeaderGroup<D>[];
interface Props extends TableProps {
  getTableProps: any;
  headerGroups: HeaderGroup<ColumnType>[];
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<ColumnType> | undefined
  ) => TableBodyProps;
  page: Row<ColumnType>[];
  prepareRow: (row: Row<ColumnType>) => void;
  checkCheckboxInstance: CheckCheckbox;
  checkedItems: boolean[];
  globalFilter: string;
  setGlobalFilter: (filterValue: any) => void;
  pageIndex: number;
  pageCount: number;
  rowsLength: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  previousPage: () => void;
  nextPage: () => void;
  setPageSize: (number) => void;
  checkAllCheckboxesInstance: CheckAllCheckboxes;
  footerGroups: FooterGroups;
}

export { Props, FooterGroups };
