import { FunctionComponent } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import SignUpForm from '../../forms/SignUpForm';
import Page from '../Page';

const SignUp: FunctionComponent = () => (
  <Page title={`Sign Up`} icon={FaUserPlus}>
    <SignUpForm />
  </Page>
);

export default SignUp;
