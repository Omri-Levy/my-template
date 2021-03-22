import { matchSorter } from 'match-sorter';
import { ObjectKey } from '@my-template/shared';

const fuzzyTextFilter: any = (
  rows: Record<ObjectKey, { [key: string]: string }>[],
  id: string,
  filterValue: string
) => {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
};

// Let the table remove the filter if the string is empty
fuzzyTextFilter.autoRemove = (value: string) => !value;

export default fuzzyTextFilter;
