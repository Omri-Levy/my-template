import { Users } from '@my-template/shared';
import { Props as TableFooterProps } from '../types';

interface Props extends TableFooterProps {
  borderColor: string;
  users: Users;
  currentColumns: number;
}

export { Props };
