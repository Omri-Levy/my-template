import { lazy } from 'react';
import commonRoutes from './commonRoutes';

const SignUp = lazy(() => import(`../../components/pages/SignUp`));
const SignIn = lazy(() => import(`../../components/pages/SignIn`));

const unauthenticatedRoutes = [
  ...commonRoutes,
  {
    to: `/signIn`,
    text: `Sign In`,
    Component: SignIn,
  },
  {
    to: `/signUp`,
    text: `Sign Up`,
    Component: SignUp,
  },
];

export default unauthenticatedRoutes;
