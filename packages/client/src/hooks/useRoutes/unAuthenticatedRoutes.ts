import { lazy } from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/all';
import commonRoutes from './commonRoutes';

const SignUp = lazy(() => import(`../../components/pages/SignUp`));
const SignIn = lazy(() => import(`../../components/pages/SignIn`));

const unauthenticatedRoutes = [
  ...commonRoutes,
  {
    to: `/signIn`,
    text: `Sign In`,
    icon: FaSignInAlt,
    Component: SignIn,
  },
  {
    to: `/signUp`,
    text: `Sign Up`,
    icon: FaUserPlus,
    Component: SignUp,
  },
];

export default unauthenticatedRoutes;
