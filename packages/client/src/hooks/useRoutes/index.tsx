import SignUp from "../../components/SignUp";
import SignIn from '../../components/SignIn';
import Home from '../../components/Home';
import Profile from '../../components/Profile';
import { useMemo, useContext } from 'react';
import { HookReturns } from './types';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';

const useRoutes: HookReturns = () => {
  const { currentUser } = useContext(AuthenticationContext);

  return useMemo(() => [
    {
      to: `/`,
      text: `Home`,
      component: Home
    },
    {
      to: currentUser ? `/profile` : null,
      text: `Profile`,
      component: Profile
    },
    {
      to: currentUser ? `/signOut` : `/signIn`,
      text: currentUser ? `Sign Out` : `Sign In`,
      component: SignIn
    },
    {
      to: currentUser ? null : `/signUp`,
      text: `Sign Up`,
      component: SignUp
    },
  ], [currentUser]);
};


export default useRoutes;
