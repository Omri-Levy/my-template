import { FunctionComponent, useContext, useRef } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import SignInForm from '../../forms/SignInForm';
import Page from '../Page';
import useRenderToast from '../../../hooks/ui/useRenderToast';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';

const SignIn: FunctionComponent = () => {
  const toastRef = useRef();
  toastRef.current = useRenderToast(toastRef);
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (isAuthenticated) {
    return <Redirect to={{ pathname: `/` }} />;
  }

  return (
    <Page title={`Sign In`} icon={FaSignInAlt}>
      {toastRef.current}
      <SignInForm />
    </Page>
  );
};

export default SignIn;
