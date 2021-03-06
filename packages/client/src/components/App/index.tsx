import { FunctionComponent, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Routes from '../globals/Routes';
import Loading from '../globals/Loading';
import { resetSignUpFormDetails } from '../../redux/reducer';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const base = useSelector((state) => state);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.match(/signUp*/)) {
      dispatch(resetSignUpFormDetails());
      console.log(base);
    }
  }, [dispatch, pathname]);

  return (
    <Suspense fallback={<Loading isLoading />}>
      <Routes />
    </Suspense>
  );
};

export default App;
