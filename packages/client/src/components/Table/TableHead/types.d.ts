import { HeaderGroup } from 'react-table';
import { ColumnType } from '../types';

interface Props {
  headerGroups: HeaderGroup<ColumnType>[];
  currentColumns: number;
}

export { Props };
