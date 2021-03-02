import { FunctionComponent, Suspense } from 'react';
import Routes from '../globals/Routes';
import Loading from '../globals/Loading';

const App: FunctionComponent = () => (
  <Suspense fallback={<Loading isLoading />}>
    <Routes />
  </Suspense>
);

export default App;
