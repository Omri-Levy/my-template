import { HeaderGroup } from 'react-table';
import { ColumnType } from '../types';

interface Props {
  footerGroups: HeaderGroup<ColumnType>[];
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
}

export { Props };
