/**
 * TODO: update description
 */
import { lazy } from 'react';
import { FaHome } from 'react-icons/fa';

const AuthenticatedHome = lazy(
  () => import(`../../../components/pages/Home/AuthenticatedHome`)
);
const home = {
  to: `/`,
  text: `Home`,
  icon: FaHome,
  Component: AuthenticatedHome,
  exact: true,
};
const commonRoutes = [home];
const commonEndpoints = [home.to];

export { commonRoutes, commonEndpoints };
