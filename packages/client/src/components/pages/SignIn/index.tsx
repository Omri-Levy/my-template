import { FunctionComponent } from 'react';
import AuthenticationForm from '../../forms/AuthenticationForm';

const SignIn: FunctionComponent = () => (
  <AuthenticationForm formType={`signIn`} />
);

export default SignIn;
