import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table';
import { ColumnType } from '../types';

interface Props {
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<ColumnType> | undefined
  ) => TableBodyProps;
  page: Row<ColumnType>[];
  prepareRow: (row: Row<ColumnType>) => void;
}

export { Props };
