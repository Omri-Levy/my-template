import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {v4} from 'uuid';
import useRoutes from '../../hooks/useRoutes';

const Routes: React.FunctionComponent = () => {
	const routes = useRoutes();

	return (
		<Switch>
			{routes.map((route) => {
				const Component = route.component;

				if (!route.component || !route.to || route.to === `/signOut`) {
					return null;
				}

				return (
					<Route key={v4()} exact path={route.to}>
						<Component />
					</Route>
				);
			})}
		</Switch>
	);
}

export default Routes;
