import { FunctionComponent, useContext, useMemo } from 'react';
import {
  emailAlreadyInUseMessage,
  unauthorizedMessage,
  updateUserProfileSchema,
  Users,
} from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUserEdit } from 'react-icons/fa';
import { useDisclosure } from '@chakra-ui/react';
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
import useIsAdmin from '../../../hooks/useIsAdmin';

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
  const {
    toast: updateUserProfileSuccessToast,
    toastOptions: updateUserProfileSuccessToastOptions,
  } = useSuccessToast(`Updated user profile successfully.`);
  const {
    toast: unauthorizedErrorToast,
    toastOptions: unauthorizedErrorToastOptions,
  } = useErrorToast(unauthorizedMessage);
  const isAdmin = useIsAdmin();
  const updateUserProfile: UpdateUserProfile = () => async (data) => {
    try {
      if (!isAdmin) {
        console.error(unauthorizedMessage);

        unauthorizedErrorToast(unauthorizedErrorToastOptions);

        return;
      }

      await fetchUpdateUserProfile(userIds[0], data);

      onClose();

      updateUserProfileSuccessToast(updateUserProfileSuccessToastOptions);

      await queryClient.invalidateQueries(`users`);
    } catch (error) {
      console.error(error);

      setResponseError(error, setError, [emailAlreadyInUseMessage]);
      onOpen();
    }
  };
  const { currentUser } = useContext(AuthenticationContext);
  const oneUserSelected = userIds.length === 1;
  const users = queryClient.getQueryData(`users`) as Users;
  const userToUpdate = users.filter((user) => user.id === userIds[0])[0];
  const disableSubmitCondition = () => {
    const formValues = watch();
    const unchangedEmail = formValues?.email === userToUpdate?.email;
    const unchangedFirstName = formValues?.fname === userToUpdate?.firstName;
    const unchangedLastName = formValues?.lname === userToUpdate?.lastName;
    const unchangedRole = formValues?.role === userToUpdate?.role;

    return (
      (unchangedEmail &&
        unchangedFirstName &&
        unchangedLastName &&
        unchangedRole) ||
      !oneUserSelected
    );
  };

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
      buttonProps={{
        marginRight: 0,
        disabled: !oneUserSelected,
        title: !oneUserSelected
          ? `Please make sure a single user is selected.`
          : undefined,
      }}
    >
      <ModalForm
        useRecaptcha={false}
        submitButtonIcon={FaUserEdit}
        submitButtonText={`Update Profile`}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        onSubmit={updateUserProfile}
        errors={errors}
        getValues={getValues}
        onClose={onClose}
        disableSubmitCondition={disableSubmitCondition}
        submitButtonDisabledTitle={`Please update at least one field.`}
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
