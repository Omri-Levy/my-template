import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table';
import { CheckCheckbox, ColumnType } from '../types';

interface Props {
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<ColumnType> | undefined
  ) => TableBodyProps;
  page: Row<ColumnType>[];
  prepareRow: (row: Row<ColumnType>) => void;
  checkCheckbox: CheckCheckbox;
  checkedItems: boolean[];
  currentColumns: number;
}

export { Props };
