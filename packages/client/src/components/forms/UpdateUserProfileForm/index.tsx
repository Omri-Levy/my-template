import { FunctionComponent, useContext, useMemo } from 'react';
import {
  emailAlreadyInUseMessage,
  formValuesChanged,
  terminateUserAccountMessage,
  unauthorizedMessage,
  updateUserProfileSchema,
  UserObject,
  Users,
} from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUserEdit } from 'react-icons/fa';
import { useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { Props, UpdateUserProfile } from './types';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';
import useSuccessToast from '../../../hooks/ui/useSuccessToast';
import ModalForm from '../ModalFormWrapper/ModalForm';
import NoUserFound from '../../NoUserFound';
import FormFields from '../FormFields';
import ModalFormWrapper from '../ModalFormWrapper';
import setResponseError from '../FormResponseError/setResponseError';
import fetchUpdateUserProfile from '../../../utils/api/fetchUpdateUserProfile';
import queryClient from '../../globals/Providers/queryClient';
import useErrorToast from '../../../hooks/ui/useErrorToast';
import AuthorizationContext from '../../../context/AuthorizationContext/AuthorizationContext';
import useDarkMode from '../../../hooks/ui/useDarkMode';

const UpdateUserProfileForm: FunctionComponent<Props> = ({ userIds }) => {
  const schema = useMemo(() => updateUserProfileSchema, []);
  const {
    errors,
    clearErrors,
    getValues,
    handleSubmit,
    formState,
    register,
    watch,
    setError,
  } = useForm({
    mode: `onChange`,
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = formState;
  const alertDisclosure = useDisclosure();
  const { onOpen } = alertDisclosure;
  const disclosure = useDisclosure();
  const { onClose } = disclosure;
  const { activateToast: activateUpdatedUserProfileToast } = useSuccessToast(
    `updatedUserProfile`,
    `Updated user profile successfully.`
  );
  const { activateToast: activateUnauthorizedToast } = useErrorToast(
    `unauthorized`,
    unauthorizedMessage
  );
  const { isAuthorized } = useContext(AuthorizationContext);
  const updateUserProfile: UpdateUserProfile = () => async (data) => {
    try {
      if (!isAuthorized) {
        console.error(unauthorizedMessage);

        activateUnauthorizedToast();

        return;
      }

      await fetchUpdateUserProfile(userIds[0], data);

      onClose();

      activateUpdatedUserProfileToast();

      await queryClient.invalidateQueries(`users`);
    } catch (error) {
      console.error(error);

      setResponseError(error, setError, [
        emailAlreadyInUseMessage,
        terminateUserAccountMessage,
      ]);

      onOpen();
    }
  };
  const { currentUser } = useContext(AuthenticationContext);
  const { role: currentUserRole } = currentUser as UserObject;
  const oneUserSelected = userIds?.length === 1;
  const users = queryClient.getQueryData(`users`) as Users;
  const userToUpdate = users.filter((user) => user.id === userIds[0])[0];
  const unauthorized =
    currentUserRole !== `admin` && userToUpdate?.role === `admin`;
  const disableSubmitCondition = () => {
    const currentValues = {
      email: userToUpdate?.email,
      fname: userToUpdate?.firstName,
      lname: userToUpdate?.lastName,
      role: userToUpdate?.role,
    };

    return (
      unauthorized ||
      formValuesChanged(currentValues, watch) ||
      !oneUserSelected
    );
  };
  const noSpaceForActions = useBreakpointValue({ base: true, xl: false });
  const { darkModeTextColorInverted, darkModeColor } = useDarkMode();

  if (!currentUser) {
    return <NoUserFound />;
  }

  return (
    <ModalFormWrapper
      headerIcon={FaUserEdit}
      headerText={`Update Profile`}
      disclosure={disclosure}
      toggleButtonIcon={FaUserEdit}
      toggleButtonText={`Update Profile`}
      toggleButtonColor={`blue`}
      buttonProps={{
        marginRight: 0,
        disabled: unauthorized || !oneUserSelected,
        isFullWidth: noSpaceForActions,
        mb: { base: 5, xl: 0 },
        title: unauthorized
          ? `Only admins may update other admins.`
          : !oneUserSelected
          ? `Please make sure a single user is selected.`
          : undefined,
        backgroundColor: darkModeColor,
        color: darkModeTextColorInverted,
      }}
    >
      <ModalForm
        useRecaptcha={false}
        submitButtonIcon={FaUserEdit}
        submitButtonText={`Update Profile`}
        submitButtonColor={`blue`}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        onSubmit={updateUserProfile}
        errors={errors}
        getValues={getValues}
        onClose={onClose}
        disableSubmitCondition={disableSubmitCondition}
        submitButtonDisabledTitle={
          unauthorized
            ? `Only admins may update other admins.`
            : `Please update at least one field.`
        }
      >
        <FormFields
          formType={`updateUserProfile`}
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
      </ModalForm>
    </ModalFormWrapper>
  );
};

export default UpdateUserProfileForm;
