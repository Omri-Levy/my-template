import { FunctionComponent } from 'react';

interface Route {
  to: string | null;
  text: string;
  Component: FunctionComponent | null;
}
type Routes = Route[];

type HookReturns = () => Routes;

export {Route, Routes, HookReturns};
