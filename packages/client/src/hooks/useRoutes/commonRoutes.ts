import { lazy } from 'react';

const UnauthenticatedHome = lazy(
  () => import(`../../components/UnauthenticatedHome`)
);

const commonRoutes = [
  {
    to: `/`,
    text: `Home`,
    Component: UnauthenticatedHome,
  },
];

export default commonRoutes;
