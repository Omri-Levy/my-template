import { FunctionComponent, memo, useContext, useRef } from 'react';
import { FaHome } from 'react-icons/fa';
import { Heading } from '@chakra-ui/react';
import { UserObject } from '@my-template/shared';
import Page from '../../Page';
import useRenderToast from '../../../../hooks/ui/useRenderToast';
import AuthenticationContext from '../../../../context/AuthenticationContext/AuthenticationContext';
import NoUserFound from '../../../NoUserFound';

const AuthenticatedHome: FunctionComponent = () => {
  const toastRef = useRef();
  toastRef.current = useRenderToast(toastRef);
  const { currentUser } = useContext(AuthenticationContext);

  if (!currentUser) {
    return <NoUserFound />;
  }

  const authenticatedUser = currentUser as UserObject;
  const welcomeMessage = `Welcome, ${authenticatedUser?.firstName}.`;

  return (
    <Page title={`Home`} icon={FaHome} display={`grid`}>
      {toastRef.current}
      <Heading as={`h2`}>{welcomeMessage}</Heading>
    </Page>
  );
};

export default memo(AuthenticatedHome);
