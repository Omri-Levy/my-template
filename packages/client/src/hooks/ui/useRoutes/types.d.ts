import { FunctionComponent } from 'react';
import { Icon } from '../../../utils/types';

interface Route {
  to: string;
  regex?: RegExp;
  formSteps?: string[];
  text: string;
  icon?: Icon | null;
  Component: FunctionComponent | null;
  exact: boolean;
}

type Routes = Route[];
type RoutesEndpoints = (string | RegExp)[];

interface RoutesObject {
  routes: Routes;
  memoizedUnauthenticatedRoutes: Routes;
  memoizedUnauthenticatedEndpoints: RoutesEndpoints;
  memoizedAuthenticatedRoutes: Routes;
  memoizedAuthenticatedEndpoints: RoutesEndpoints;
  memoizedAdminRoutes: Routes;
  memoizedAdminEndpoints: RoutesEndpoints;
}

type HookReturns = () => RoutesObject;

export { Route, Routes, HookReturns };
