/**
 * TODO: update description
 */
import { lazy } from 'react';
import { FaUserCog } from 'react-icons/fa';
import { commonEndpoints } from './commonRoutes';
import {
  authenticatedEndpoints,
  authenticatedRoutes,
} from './authenticatedRoutes';

const AdminPanel = lazy(() => import(`../../../components/pages/AdminPanel`));
const adminPanel = {
  to: `/adminPanel`,
  text: `Admin Panel`,
  icon: FaUserCog,
  Component: AdminPanel,
  exact: true,
};

const adminRoutes = [adminPanel, ...authenticatedRoutes];
const adminEndpoints = [
  ...commonEndpoints,
  ...authenticatedEndpoints,
  adminPanel.to,
];

export { adminRoutes, adminEndpoints };
