import { HeaderGroup } from 'react-table';
import { ColumnType } from '../types';
import { ChakraColorScheme } from '../../../utils/types';

interface Props {
  headerGroups: HeaderGroup<ColumnType>[];
  currentColumns: number;
  sortedByColor?: ChakraColorScheme;
}

export { Props };
