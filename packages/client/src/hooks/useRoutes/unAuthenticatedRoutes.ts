import commonRoutes from './commonRoutes';
import { lazy } from 'react';

const SignUp = lazy(() => import("../../components/SignUp"));
const SignIn = lazy(() => import('../../components/SignIn'));

const unauthenticatedRoutes = [
  ...commonRoutes,
  {
    to: `/signIn`,
    text: `Sign In`,
    Component: SignIn
  },
  {
    to: `/signUp`,
    text: `Sign Up`,
    Component: SignUp
  },
];

export default unauthenticatedRoutes;
