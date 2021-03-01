import { FunctionComponent } from 'react';
import { FaRedoAlt } from 'react-icons/all';
import Page from '../Page';

const ForgotPassword: FunctionComponent = () => (
  <Page title={`Forgot Password`} icon={FaRedoAlt}>
    <h1>ForgotPassword</h1>
  </Page>
);

export default ForgotPassword;
