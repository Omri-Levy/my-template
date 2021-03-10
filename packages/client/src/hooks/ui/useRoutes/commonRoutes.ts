import { lazy } from 'react';
import { FaHome } from 'react-icons/fa';

const UnauthenticatedHome = lazy(
  () => import(`../../../components/pages/Home/UnauthenticatedHome`)
);
const home = {
  to: `/`,
  text: `Home`,
  icon: FaHome,
  Component: UnauthenticatedHome,
  exact: true,
};
const commonRoutes = [home];
const commonEndpoints = [home.to];

export { commonRoutes, commonEndpoints };
