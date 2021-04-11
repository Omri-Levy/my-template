import { Row, TableBodyPropGetter, TableBodyProps } from 'react-table';
import { CheckCheckbox, ColumnType } from '../types';
import { ChakraColorScheme } from '../../../utils/types';

interface Props {
  getTableBodyProps: (
    propGetter?: TableBodyPropGetter<ColumnType> | undefined
  ) => TableBodyProps;
  page: Row<ColumnType>[];
  prepareRow: (row: Row<ColumnType>) => void;
  checkCheckbox: CheckCheckbox;
  currentColumns: number;
  isChecked: (id: string) => boolean;
  checkboxColor?: ChakraColorScheme;
}

export { Props };
