import { FunctionComponent } from 'react';
import { Icon } from '../../../utils/types';

interface Route {
  to: string;
  regex?: RegExp;
  formSteps?: string[];
  text: string;
  icon?: Icon | null;
  Component: FunctionComponent | null;
  AlternativeComponent?: FunctionComponent | null;
  exact: boolean;
}

type Routes = Route[];

interface RoutesObject {
  memoizedRoutes: Routes;
}

type HookReturns = () => RoutesObject;

export { Route, Routes, HookReturns };
