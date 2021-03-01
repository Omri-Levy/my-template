import { lazy } from 'react';
import { FaHome } from 'react-icons/fa';

const UnauthenticatedHome = lazy(
  () => import(`../../components/pages/Home/UnauthenticatedHome`)
);

const commonRoutes = [
  {
    to: `/`,
    text: `Home`,
    icon: FaHome,
    Component: UnauthenticatedHome,
  },
];

export default commonRoutes;
