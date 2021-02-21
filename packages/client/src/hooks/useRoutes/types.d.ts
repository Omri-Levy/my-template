import { FunctionComponent } from 'react';

interface Route {
  to: string | null;
  text: string;
  component: FunctionComponent;
}
type Routes = Route[];

type HookReturns = () => Routes;

export {Route, Routes, HookReturns};
