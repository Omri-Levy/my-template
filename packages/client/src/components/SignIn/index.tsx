import { FunctionComponent } from 'react';
import AuthenticationForm from '../AuthenticationForm';

const SignIn: FunctionComponent = () => (
	<AuthenticationForm formType={`signIn`}/>
	);

export default SignIn;
