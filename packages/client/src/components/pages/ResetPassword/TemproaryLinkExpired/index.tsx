import { FunctionComponent } from 'react';
import NavBox from '../../../NavBox';
import NavButton from '../../../NavBox/NavButton';

const TemporaryLinkExpired: FunctionComponent = () => (
  <NavBox>
    <NavButton to={`/`} text={`Home`} />
    <NavButton to={`/forgotPassword`} text={`Reset Password`} />
  </NavBox>
);

export default TemporaryLinkExpired;
