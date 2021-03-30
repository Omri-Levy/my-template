import { useMemo } from 'react';
import { capitalize } from '@my-template/shared';
import { HookReturns } from './types';

/**
 * TODO: update description
 */
const useTableData: HookReturns = (users) =>
  useMemo(
    () =>
      users?.map((user) => ({
        col1: user?.id,
        col2: user?.email,
        col3: user?.firstName,
        col4: user?.lastName,
        col5: capitalize(user?.role),
      })),
    [users]
  ) || [];

export default useTableData;
