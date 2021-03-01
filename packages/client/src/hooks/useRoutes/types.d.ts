import { FunctionComponent } from 'react';
import { Icon } from '../../utils/types';

interface Route {
  to: string | null;
  text: string;
  Component: FunctionComponent | null;
  icon?: Icon | null;
}

type Routes = Route[];

type HookReturns = () => Routes;

export { Route, Routes, HookReturns };
