import { useQuery } from 'react-query';
import { HookReturns } from './types';
import fetchCurrentUser from '../../utils/fetchCurrentUser';

/**
 * queries using react-query
 */
const useQueryCurrentUser: HookReturns = () =>
  useQuery(`currentUser`, fetchCurrentUser);

export default useQueryCurrentUser;
