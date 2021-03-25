import { FunctionComponent, useContext, useState } from 'react';
import { FaIdCard } from 'react-icons/fa';
import { Redirect, useHistory } from 'react-router-dom';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/all';
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
  const [isLoading, setIsLoading] = useState(false);
  const { replace } = useHistory();
  const {
    toast: userAccountTerminatedToast,
    toastOptions: userAccountTerminatedToastOptions,
  } = useSuccessToast(`Account terminated successfully.`);
  const terminateUserAccount = (onClose: () => void) => async () => {
    try {
      setIsLoading(true);
      await fetchTerminateUserAccount();

      onClose();

      await authenticate();

      replace(`/`, {
        toast: userAccountTerminatedToast(userAccountTerminatedToastOptions),
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

    setIsLoading(false);
  };

  if (!isAuthenticated) {
    return <Redirect to={{ pathname: `/` }} />;
  }

  return (
    <Page title={`Profile`} icon={FaIdCard}>
      <Card color={`unset`} backgroundColor={`unset`}>
        <CurrentUserDetails />
        <Flex justifyContent={`flex-end`} mt={5}>
          <Modal
            toggleButtonText={`Terminate account`}
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
        </Flex>
      </Card>
    </Page>
  );
};

export default Profile;
