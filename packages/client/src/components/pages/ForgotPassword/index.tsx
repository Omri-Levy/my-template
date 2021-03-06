import { FunctionComponent } from 'react';
import { FaRedoAlt } from 'react-icons/fa';
import Page from '../Page';
import ForgotPasswordForm from '../../forms/ForgotPasswordForm';

const ForgotPassword: FunctionComponent = () => (
  <Page title={`Forgot Password`} icon={FaRedoAlt}>
    <ForgotPasswordForm />
  </Page>
);

export default ForgotPassword;
