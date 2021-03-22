/**
 * TODO: update description
 */
import { lazy } from 'react';
import { FaHome } from 'react-icons/fa';

const Home = lazy(() => import(`../../../components/pages/Home`));
const home = {
  to: `/`,
  text: `Home`,
  icon: FaHome,
  Component: Home,
  exact: true,
};
const commonRoutes = [home];
const commonEndpoints = [home.to];

export { commonRoutes, commonEndpoints };
