import { FunctionComponent } from 'react';
import {Route, Switch} from 'react-router-dom';
import {v4} from 'uuid';
import useRoutes from '../../hooks/useRoutes';

const Routes: FunctionComponent = () => {
	const routes = useRoutes();

	return (
		<Switch>
			{routes.map((route) => {
				const { Component, to } = route;

				if (!Component || !to || to === `/signOut`) {
					return null;
				}

				return (
					<Route key={v4()} exact path={to}>
						<Component />
					</Route>
				);
			})}
		</Switch>
	);
}

export default Routes;
