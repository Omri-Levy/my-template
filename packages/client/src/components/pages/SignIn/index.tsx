import { FunctionComponent } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import SignInForm from '../../forms/SignInForm';
import Page from '../Page';

const SignIn: FunctionComponent = () => (
  <Page title={`Sign In`} icon={FaSignInAlt}>
    <SignInForm />
  </Page>
);

export default SignIn;
