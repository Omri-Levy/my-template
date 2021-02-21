import { HookReturns } from './types';
import { useQuery } from 'react-query';
import fetchCurrentUser from '../../utils/fetchCurrentUser';

const useQueryCurrentUser: HookReturns = () => (
  useQuery(`currentUser`, fetchCurrentUser)
);

export default useQueryCurrentUser;
