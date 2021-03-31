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
interface ActionsPropsPlusCheckedItems extends ActionsProps {
  checkedItems: boolean[];
}
interface Props extends TableProps {
  caption: string;
  data: Columns;
  columns: Column<ColumnType>[];
  ids: string[];
  setIds: SetState<string[]>;
  Actions: FunctionComponent<ActionsPropsPlusCheckedItems>;
  actionsProps: ActionsProps;
  setSessionStorageIds: (ids: string[]) => void;
}
type CheckCheckbox = (
  id: string,
  index: number
) => (event: ChangeEvent<HTMLInputElement>) => void;
type CheckAllCheckboxes = (event: ChangeEvent<HTMLInputElement>) => void;

export { ColumnType, Props, CheckCheckbox, CheckAllCheckboxes };
