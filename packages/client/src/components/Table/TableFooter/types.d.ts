import { FilterValue, HeaderGroup, IdType } from 'react-table';
import { ColumnType } from '../types';

interface Props {
  footerGroups: HeaderGroup<ColumnType>[];
  setFilter: <D>(columnId: IdType<D>, updater: (((filterValue: FilterValue
  ) => FilterValue) | FilterValue)) => void;
}

export { Props };
