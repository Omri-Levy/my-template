import { FunctionComponent, useContext, useState } from 'react';
import { FaIdCard } from 'react-icons/fa';
import { Redirect, useHistory } from 'react-router-dom';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/all';
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
  const [isLoading, setIsLoading] = useState(false);
  const { replace } = useHistory();
  const {
    toast: userAccountTerminatedToast,
    toastOptions: userAccountTerminatedToastOptions,
  } = useSuccessToast(`Account terminated successfully.`);
  const terminateUserAccount = (onClose: () => void) => async () => {
    setIsLoading(true);
    await fetchTerminateUserAccount();
    setIsLoading(false);

    onClose();

    await authenticate();

    replace(`/`, {
      toast: userAccountTerminatedToast(userAccountTerminatedToastOptions),
    });
  };

  if (!isAuthenticated) {
    return <Redirect to={{ pathname: `/` }} />;
  }

  return (
    <Page title={`Profile`} icon={FaIdCard}>
      <Card color={`unset`} backgroundColor={`unset`} mt={100}>
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
          />
        </Flex>
      </Card>
    </Page>
  );
};

export default Profile;
