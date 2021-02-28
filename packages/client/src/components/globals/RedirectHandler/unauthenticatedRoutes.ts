import commonRoutes from './commonRoutes';

const unauthenticatedRoutes = [...commonRoutes, `/signUp`, `/signIn`];

export default unauthenticatedRoutes;
