import { FunctionComponent, memo } from 'react';
import { Props } from './types';
import TableFooterController from './TableFooterController';

const TableFooter: FunctionComponent<Props> = (props) => (
  <TableFooterController {...props} />
);

export default memo(TableFooter);
