import { FunctionComponent } from 'react';
import AuthenticationForm from '../AuthenticationForm';

const SignUp: FunctionComponent = () => (
  <AuthenticationForm formType={`signUp`} />
);

export default SignUp;
