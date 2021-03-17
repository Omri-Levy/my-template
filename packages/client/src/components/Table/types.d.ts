import { TableProps } from '@chakra-ui/react';
import { Column } from 'react-table';

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

export { ColumnType, Props };
