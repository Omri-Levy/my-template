import { FunctionComponent, useContext } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import SignUpForm from '../../forms/SignUpForm';
import Page from '../Page';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';

const SignUp: FunctionComponent = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (isAuthenticated) {
    return <Redirect to={{ pathname: `/` }} />;
  }

  return (
    <Page title={`Sign Up`} icon={FaUserPlus}>
      <SignUpForm />
    </Page>
  );
};

export default SignUp;
