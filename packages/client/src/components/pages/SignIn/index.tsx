import { FunctionComponent, useEffect, useRef } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';
import SignInForm from '../../forms/SignInForm';
import Page from '../Page';
import { State } from './types';

const SignIn: FunctionComponent = () => {
  const { location, replace } = useHistory();
  const { pathname } = useLocation();
  const isMounted = useRef(true);
  const toastRef = useRef();
  const state = location.state as State;

  useEffect(() => {
    if (isMounted) {
      toastRef.current = state?.toast;

      if (toastRef.current) {
        replace(pathname, {});
      }
    }

    return () => {
      isMounted.current = false;
    };
  }, [replace, pathname, state?.toast]);

  return (
    <Page title={`Sign In`} icon={FaSignInAlt}>
      {toastRef.current}
      <SignInForm />
    </Page>
  );
};

export default SignIn;
