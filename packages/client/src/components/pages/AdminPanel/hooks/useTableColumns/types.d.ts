import { Column } from 'react-table';

type HookReturns = () => Column<{
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}>[];

export { HookReturns };
