import { useMemo, useContext, lazy } from 'react';
import { HookReturns } from './types';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';
const SignIn = lazy(() => import('../../components/SignIn'));
const Home = lazy(() => import('../../components/Home'));
const Profile = lazy(() => import('../../components/Profile'));
const SignUp = lazy(() => import("../../components/SignUp"));

const useRoutes: HookReturns = () => {
  const { currentUser } = useContext(AuthenticationContext);

  return useMemo(() => [
    {
      to: `/`,
      text: `Home`,
      Component: Home
    },
    {
      to: currentUser ? `/profile` : null,
      text: `Profile`,
      Component: Profile
    },
    {
      to: currentUser ? `/signOut` : `/signIn`,
      text: currentUser ? `Sign Out` : `Sign In`,
      Component: SignIn
    },
    {
      to: currentUser ? null : `/signUp`,
      text: `Sign Up`,
      Component: SignUp
    },
  ], [currentUser]);
};


export default useRoutes;
