import { FunctionComponent, useContext, useState } from 'react';
import { FaIdCard, FaTrashAlt } from 'react-icons/fa';
import { Redirect, useHistory } from 'react-router-dom';
import { HStack, useDisclosure } from '@chakra-ui/react';
import {
  serverErrorMessage,
  terminateUserAccountMessage,
} from '@my-template/shared';
import Page from '../Page';
import Card from '../../Card';
import CurrentUserDetails from './CurrentUserDetails';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';
import Modal from '../../Modal';
import fetchTerminateUserAccount from '../../../utils/api/fetchTerminateUserAccount';
import useSuccessToast from '../../../hooks/ui/useSuccessToast';
import UpdateProfileForm from '../../forms/UpdateProfileForm';
import useLoading from '../../../hooks/ui/useLoading';
import UpdatePasswordForm from '../../forms/UpdatePasswordForm';

/**
 * a route wrapped with the Page component to display the currently
 * authenticated user's details.
 */
const Profile: FunctionComponent = () => {
  const { isAuthenticated, authenticate } = useContext(AuthenticationContext);
  const disclosure = useDisclosure();
  const alertDisclosure = useDisclosure();
  const [errorMessage, setErrorMessage] = useState(``);
  const { onOpen } = alertDisclosure;
  const { isLoading, startLoading, stopLoading } = useLoading();
  const { replace } = useHistory();
  const { activateToast } = useSuccessToast(
    `accountTerminated`,
    `Account terminated successfully.`
  );
  /**
   * TODO: abstract this function
   */
  const terminateUserAccount = (onClose: () => void) => async () => {
    try {
      startLoading();
      await fetchTerminateUserAccount();

      onClose();

      await authenticate();

      replace(`/`, {
        toast: activateToast(),
      });
    } catch (error) {
      console.error(error);

      let message: string;

      if (error?.response?.data?.message === terminateUserAccountMessage) {
        message = terminateUserAccountMessage;
      } else {
        message = serverErrorMessage;
      }

      setErrorMessage(message);

      onOpen();
    }

    stopLoading();
  };

  if (!isAuthenticated) {
    return <Redirect to={{ pathname: `/` }} />;
  }

  return (
    <Page title={`Profile`} icon={FaIdCard}>
      <Card color={`unset`} backgroundColor={`unset`}>
        <CurrentUserDetails />
        <HStack my={5}>
          <UpdateProfileForm />
          <UpdatePasswordForm />
        </HStack>
        <Modal
          buttonProps={{
            isFullWidth: true,
          }}
          toggleButtonText={`Terminate account`}
          toggleButtonColor={`red`}
          headerText={`Terminate account`}
          bodyHeadingText={`Warning!`}
          headingProps={{ color: `red.300`, fontSize: 16 }}
          bodyText={
            `This action will delete your account with no way ` +
            `of reverting.. Are you sure?`
          }
          actionText={`Terminate account`}
          actionIcon={FaTrashAlt}
          onClick={terminateUserAccount}
          isLoading={isLoading}
          disclosure={disclosure}
          alertDisclosure={alertDisclosure}
          errorMessage={errorMessage}
        />
      </Card>
    </Page>
  );
};

export default Profile;
