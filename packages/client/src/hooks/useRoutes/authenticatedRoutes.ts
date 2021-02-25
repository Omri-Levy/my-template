import { lazy } from 'react';
import commonRoutes from './commonRoutes';

const Profile = lazy(() => import(`../../components/Profile`));

const authenticatedRoutes = [
  ...commonRoutes,
  {
    to: `/profile`,
    text: `Profile`,
    Component: Profile,
  },
  {
    to: `/signOut`,
    text: `Sign Out`,
    Component: null,
  },
];

export default authenticatedRoutes;
