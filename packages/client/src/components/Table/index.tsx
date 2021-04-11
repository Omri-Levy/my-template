import { FunctionComponent } from 'react';
import { Props } from './types';
import TableController from './TableController';

/**
 * refactor to smaller abstractions
 */
const Table: FunctionComponent<Props> = (props) => (
  <TableController {...props} />
);

export default Table;
