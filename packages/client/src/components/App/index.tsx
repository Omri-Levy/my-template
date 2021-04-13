import { FunctionComponent, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { resetSignUpFormDetails } from '../../redux/reducer';
import Routes from '../globals/Routes';
import Loading from '../globals/Loading';
import useUserIds from '../../hooks/caching/useUserIds';
import usePathBasedAction from '../../hooks/usePathBasedAction';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { resetUserIds } = useUserIds();
  /**
   * resets the sign up form when leaving sign up.
   */
  const signUpAction = () => {
    console.log(`yeet`);
    dispatch(resetSignUpFormDetails());
  };
  /**
   * resets the cached user ids when leaving the admin panel.
   */
  const adminPanelAction = () => resetUserIds();
  const isNotSignUp = /^(?!\/signUp).*/;
  const isNotAdminPanel = /^(?!\/adminPanel).*/;

  usePathBasedAction(isNotSignUp, signUpAction);
  usePathBasedAction(isNotAdminPanel, adminPanelAction);

  return (
    <Suspense fallback={<Loading suspense />}>
      <Routes />
    </Suspense>
  );
};

export default App;
