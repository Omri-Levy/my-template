import { lazy } from 'react';
import { FaIdCard, FaSignOutAlt } from 'react-icons/fa';
import commonRoutes from './commonRoutes';

const Profile = lazy(() => import(`../../components/pages/Profile`));

const authenticatedRoutes = [
  ...commonRoutes,
  {
    to: `/profile`,
    text: `Profile`,
    icon: FaIdCard,
    Component: Profile,
  },
  {
    to: `/signOut`,
    text: `Sign Out`,
    icon: FaSignOutAlt,
    Component: null,
  },
];

export default authenticatedRoutes;
