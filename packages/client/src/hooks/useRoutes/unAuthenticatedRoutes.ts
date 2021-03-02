import { lazy } from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import commonRoutes from './commonRoutes';
import ForgotPassword from '../../components/pages/ForgotPassword';

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
  {
    to: `/forgotPassword`,
    text: `Forgot Password`,
    icon: FaSignInAlt,
    Component: ForgotPassword,
  },
];

export default unauthenticatedRoutes;
