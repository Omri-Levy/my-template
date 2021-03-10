import { FunctionComponent, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 } from 'uuid';
import useRoutes from '../../../hooks/ui/useRoutes';

const Routes: FunctionComponent = () => {
  const { routes } = useRoutes();

  return (
    <Switch>
      {routes.map((route) => {
        const { Component, to, exact } = route;

        if (!Component || !to || to === `/signOut`) {
          return null;
        }

        return (
          <Route key={v4()} exact={exact} path={to}>
            <Component />
          </Route>
        );
      })}
    </Switch>
  );
};

export default memo(Routes);
