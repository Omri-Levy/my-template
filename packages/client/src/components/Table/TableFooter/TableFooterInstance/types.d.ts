import { Users } from '@my-template/shared';
import { Props as TableFooterProps } from '../types';
import { ChakraColorScheme } from '../../../../utils/types';

interface Props extends TableFooterProps {
  borderColor: string;
  users: Users;
  currentColumns: number;
  allCheckboxesChecked: boolean;
  checkboxColor?: ChakraColorScheme;
}

export { Props };
