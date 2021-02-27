import commonRoutes from './commonRoutes';

const authenticatedRoutes = [...commonRoutes, `/profile`, `/signOut`];

export default authenticatedRoutes;
