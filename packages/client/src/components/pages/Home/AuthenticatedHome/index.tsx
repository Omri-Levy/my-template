import { FunctionComponent, memo, useContext, useRef } from 'react';
import { FaHome } from 'react-icons/fa';
import { Heading } from '@chakra-ui/react';
import Page from '../../Page';
import useRenderToast from '../../../../hooks/ui/useRenderToast';
import AuthenticationContext from '../../../../context/AuthenticationContext/AuthenticationContext';

const AuthenticatedHome: FunctionComponent = () => {
  const toastRef = useRef();
  toastRef.current = useRenderToast(toastRef);
  const { currentUser } = useContext(AuthenticationContext);
  let welcomeMessage;

  /**
   * had to make this inline condition due to typescript failing on
   * currentUser.firstName - even when using an already made -exactly- the
   * same condition from AuthenticationContext.
   */
  if (currentUser && currentUser !== `unauthenticated`) {
    welcomeMessage = `Welcome, ${currentUser?.firstName}.`;
  }

  return (
    <Page title={`Home`} icon={FaHome} display={`grid`}>
      {toastRef.current}
      <Heading as={`h2`}>{welcomeMessage}</Heading>
    </Page>
  );
};

export default memo(AuthenticatedHome);
