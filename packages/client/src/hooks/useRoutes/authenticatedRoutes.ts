import { lazy } from 'react';
import { FaIdCard, FaSignOutAlt } from 'react-icons/fa';
import { commonEndpoints, commonRoutes } from './commonRoutes';

const Profile = lazy(() => import(`../../components/pages/Profile`));
const profile = {
  to: `/profile`,
  text: `Profile`,
  icon: FaIdCard,
  Component: Profile,
  exact: true,
};
const signOut = {
  to: `/signOut`,
  text: `Sign Out`,
  icon: FaSignOutAlt,
  Component: null,
  exact: true,
};
const authenticatedRoutes = [...commonRoutes, profile, signOut];
const authenticatedEndpoints = [...commonEndpoints, profile.to, signOut.to];

export { authenticatedRoutes, authenticatedEndpoints };
