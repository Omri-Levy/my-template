/**
 * TODO: update description
 */
import { lazy } from 'react';
import { FaRedoAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { commonEndpoints, commonRoutes } from './commonRoutes';
import ForgotPassword from '../../../components/pages/ForgotPassword';
import ResetPassword from '../../../components/pages/ResetPassword';

const SignUp = lazy(() => import(`../../../components/pages/SignUp`));
const SignIn = lazy(() => import(`../../../components/pages/SignIn`));

const signIn = {
  to: `/signIn`,
  text: `Sign In`,
  icon: FaSignInAlt,
  Component: SignIn,
  exact: true,
};
const signUp = {
  to: `/signUp`,
  formSteps: [`/signUp/securityInformation`],
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
const resetPassword = {
  to: `/resetPassword/:token`,
  regex: /\/resetPassword\/*/,
  text: `Reset Password`,
  icon: FaRedoAlt,
  Component: ResetPassword,
  exact: false,
};

const unauthenticatedRoutes = [
  ...commonRoutes,
  signIn,
  signUp,
  forgotPassword,
  resetPassword,
];
const unauthenticatedEndpoints = [
  ...commonEndpoints,
  signUp.to,
  ...signUp.formSteps,
  signIn.to,
  forgotPassword.to,
  resetPassword.regex,
];

export { unauthenticatedRoutes, unauthenticatedEndpoints };
