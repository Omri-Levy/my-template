import { FunctionComponent, memo } from 'react';
import { Users } from '@my-template/shared';
import useDarkMode from '../../../../hooks/ui/useDarkMode';
import queryClient from '../../../globals/Providers/queryClient';
import TableFooterInstance from '../TableFooterInstance';
import { Props } from '../types';

const TableFooterController: FunctionComponent<Props> = (props) => {
  const { isDarkMode } = useDarkMode();
  const borderColor = isDarkMode ? `#2D3748` : `#EDF2F7`;
  const users = queryClient.getQueryData(`users`) as Users;
  const controllerProps = {
    borderColor,
    users,
  };

  return <TableFooterInstance {...controllerProps} {...props} />;
};

export default memo(TableFooterController);
