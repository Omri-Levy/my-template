import { TableProps } from '@chakra-ui/react';
import { Column } from 'react-table';
import { ChangeEvent, FunctionComponent } from 'react';
import { SetState } from '../../utils/types';

interface ColumnType {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}

type Columns = ColumnType[];
interface ActionsProps {
  icons?: boolean;
  ids: string[];
}
interface Props {
  caption: string;
  data: Columns;
  columns: Column<ColumnType>[];
  ids: string[];
  allIds: string[];
  setIds: SetState<string[]>;
  Actions: FunctionComponent<ActionsProps>;
  actionsProps: ActionsProps;
  setSessionStorageIds: (ids: string[]) => void;
  tableProps?: TableProps;
}
type CheckCheckbox = (
  id: string
) => (event: ChangeEvent<HTMLInputElement>) => void;
type CheckAllCheckboxes = (event: ChangeEvent<HTMLInputElement>) => void;

export { ColumnType, Props, CheckCheckbox, CheckAllCheckboxes };
