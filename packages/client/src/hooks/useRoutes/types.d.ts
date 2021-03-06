import { FunctionComponent } from 'react';
import { Icon } from '../../utils/types';

interface Route {
  to: string;
  text: string;
  icon?: Icon | null;
  Component: FunctionComponent | null;
  exact: boolean;
}

type Routes = Route[];

interface RoutesObject {
  routes: Routes;
  unprotectedRoutes: Routes;
  unprotectedEndpoints: string[];
  protectedRoutes: Routes;
  protectedEndpoints: string[];
}

type HookReturns = () => RoutesObject;

export { Route, Routes, HookReturns };
