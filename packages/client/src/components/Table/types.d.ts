import { TableProps } from '@chakra-ui/react';
import { Column } from 'react-table';
import { ChangeEvent } from 'react';

interface ColumnType {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}

type Columns = ColumnType[];

interface Props extends TableProps {
  caption: string;
  data: Columns;
  columns: Column<ColumnType>[];
}
type CheckCheckbox = (id: string, index: number) => (event: ChangeEvent<HTMLInputElement>) => void;
type CheckAllCheckboxes = (event: ChangeEvent<HTMLInputElement>) => void;

export { ColumnType, Props, CheckCheckbox, CheckAllCheckboxes };
