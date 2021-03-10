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

interface RoutesObject {
  routes: Routes;
  unprotectedRoutes: Routes;
  unprotectedEndpoints: (string | RegExp)[];
  protectedRoutes: Routes;
  protectedEndpoints: (string | RegExp)[];
}

type HookReturns = () => RoutesObject;

export { Route, Routes, HookReturns };
