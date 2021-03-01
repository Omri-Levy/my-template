import commonRoutes from './commonRoutes';

const unauthenticatedRoutes = [
  ...commonRoutes,
  `/signUp`,
  `/signIn`,
  `/forgotPassword`,
];

export default unauthenticatedRoutes;
