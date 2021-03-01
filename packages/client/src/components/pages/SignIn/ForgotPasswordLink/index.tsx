import { FunctionComponent } from 'react';
import { Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Props } from './types';

/**
 * a simple component made with Chakra-UI's Link component  with
 * react-router-dom's NavLink passed into the Link's "as" prop leading to
 * the forgot password route.
 */
const ForgotPasswordLink: FunctionComponent<Props> = (props) => (
  <Link exact as={NavLink} to={`/forgotPassword`} {...props}>
    Forgot your password?
  </Link>
);

export default ForgotPasswordLink;
