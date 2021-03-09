import { FunctionComponent, useRef } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import SignInForm from '../../forms/SignInForm';
import Page from '../Page';
import useRenderToast from '../../../hooks/useRenderToast';

const SignIn: FunctionComponent = () => {
  const toastRef = useRef();
  toastRef.current = useRenderToast(toastRef);

  return (
    <Page title={`Sign In`} icon={FaSignInAlt}>
      {toastRef.current}
      <SignInForm />
    </Page>
  );
};

export default SignIn;
