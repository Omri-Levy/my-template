import { FunctionComponent, useContext } from 'react';
import { FaRedoAlt } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import Page from '../Page';
import ForgotPasswordForm from '../../forms/ForgotPasswordForm';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';

const ForgotPassword: FunctionComponent = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (isAuthenticated) {
    return <Redirect to={{ pathname: `/` }} />;
  }

  return (
    <Page title={`Forgot Password`} icon={FaRedoAlt}>
      <ForgotPasswordForm />
    </Page>
  );
};

export default ForgotPassword;
