import { FunctionComponent, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { resetSignUpFormDetails } from '../../redux/reducer';
import Routes from '../globals/Routes';
import Loading from '../globals/Loading';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  /**
   * resets the sign up form when leaving sign up.
   */
  useEffect(() => {
    if (!pathname.match(/signUp*/)) {
      dispatch(resetSignUpFormDetails());
    }
  }, [dispatch, pathname]);

  return (
    <Suspense fallback={<Loading suspense />}>
      <Routes />
    </Suspense>
  );
};

export default App;
