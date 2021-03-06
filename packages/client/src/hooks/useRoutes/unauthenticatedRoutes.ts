import { lazy } from 'react';
import { FaRedoAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { commonEndpoints, commonRoutes } from './commonRoutes';
import ForgotPassword from '../../components/pages/ForgotPassword';

const SignUp = lazy(() => import(`../../components/pages/SignUp`));
const SignIn = lazy(() => import(`../../components/pages/SignIn`));

const signIn = {
  to: `/signIn`,
  text: `Sign In`,
  icon: FaSignInAlt,
  Component: SignIn,
  exact: true,
};
const signUp = {
  to: `/signUp`,
  text: `Sign Up`,
  icon: FaUserPlus,
  Component: SignUp,
  exact: false,
};
const forgotPassword = {
  to: `/forgotPassword`,
  text: `Forgot Password`,
  icon: FaRedoAlt,
  Component: ForgotPassword,
  exact: true,
};

const unauthenticatedRoutes = [...commonRoutes, signIn, signUp, forgotPassword];
const unauthenticatedEndpoints = [
  ...commonEndpoints,
  signIn.to,
  signUp.to,
  `/signUp/securityInformation`,
  forgotPassword.to,
];

export { unauthenticatedRoutes, unauthenticatedEndpoints };
