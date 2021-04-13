import {
  HeaderGroup,
  Row,
  TableBodyPropGetter,
  TableBodyProps,
} from 'react-table';
import { TableProps as ChakraTableProps } from '@chakra-ui/react';
import {
  CheckAllCheckboxes,
  CheckCheckbox,
  ColumnType,
  Props as TableProps,
} from '../types';
import { SetState } from '../../../utils/types';

type FooterGroups<D> = HeaderGroup<D>[];
interface Props extends TableProps {
  getTableProps: any;
  headerGroups: HeaderGroup<ColumnType>[];
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<ColumnType> | undefined
  ) => TableBodyProps;
  page: Row<ColumnType>[];
  prepareRow: (row: Row<ColumnType>) => void;
  checkCheckbox: CheckCheckbox;
  isChecked: (id: string) => boolean;
  globalFilter: string;
  setGlobalFilter: (filterValue: any) => void;
  pageIndex: number;
  pageCount: number;
  pageSize: number;
  rowsLength: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  previousPage: () => void;
  nextPage: () => void;
  setPageSize: (number) => void;
  checkAllCheckboxes: CheckAllCheckboxes;
  allCheckboxesChecked: boolean;
  footerGroups: FooterGroups;
  tableProps?: ChakraTableProps;
  isMobile: boolean | undefined;
  columnsChunks: { label: string }[];
  headerChunks: string[][];
  currentColumns: number;
  setCurrentColumns: SetState<number>;
}

export { Props, FooterGroups };
