import { FunctionComponent } from 'react';
import AuthenticationForm from '../../forms/AuthenticationForm';

const SignUp: FunctionComponent = () => (
  <AuthenticationForm formType={`signUp`} />
);

export default SignUp;
