import { lazy } from 'react';

const Home = lazy(() => import(`../../components/Home`));

const commonRoutes = [
  {
    to: `/`,
    text: `Home`,
    Component: Home,
  },
];

export default commonRoutes;
