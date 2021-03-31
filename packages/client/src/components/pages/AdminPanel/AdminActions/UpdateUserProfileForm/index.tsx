import { FunctionComponent, useContext, useMemo } from 'react';
import {
  emailAlreadyInUseMessage,
  updateProfileSchema,
  UserObject,
} from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUserEdit } from 'react-icons/fa';
import { useDisclosure } from '@chakra-ui/react';
import { Props, UpdateUserProfile } from './types';
import AuthenticationContext from '../../../../../context/AuthenticationContext/AuthenticationContext';
import useSuccessToast from '../../../../../hooks/ui/useSuccessToast';
import ModalForm from '../../../../forms/ModalFormWrapper/ModalForm';
import NoUserFound from '../../../../NoUserFound';
import FormFields from '../../../../forms/FormFields';
import ModalFormWrapper from '../../../../forms/ModalFormWrapper';
import setResponseError from '../../../../forms/FormResponseError/setResponseError';
import fetchUpdateProfile from '../../../../../utils/api/fetchUpdateProfile';

const UpdateUserProfileForm: FunctionComponent<Props> = ({ userIds }) => {
  const schema = useMemo(() => updateProfileSchema, []);
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
  const { authenticate } = useContext(AuthenticationContext);
  const {
    toast: updateUserProfileSuccessToast,
    toastOptions: updateUserProfileSuccessToastOptions,
  } = useSuccessToast(`Updated profile successfully.`);
  const updateUserProfile: UpdateUserProfile = () => async (data) => {
    try {
      await fetchUpdateProfile(data);

      onClose();

      updateUserProfileSuccessToast(updateUserProfileSuccessToastOptions);

      await authenticate();
    } catch (error) {
      console.error(error);

      setResponseError(error, setError, [emailAlreadyInUseMessage]);
      onOpen();
    }
  };
  const { currentUser } = useContext(AuthenticationContext);
  const authenticatedUser = currentUser as UserObject;
  const oneUserSelected = userIds.length === 1;
  const disableSubmitCondition = () => {
    const formValues = watch();
    const unchangedEmail = formValues?.email === authenticatedUser?.email;
    const unchangedFirstName =
      formValues?.fname === authenticatedUser?.firstName;
    const unchangedLastName = formValues?.lname === authenticatedUser?.lastName;

    return (
      unchangedEmail &&
      unchangedFirstName &&
      unchangedLastName &&
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
          formType={`updateProfile`}
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
      </ModalForm>
    </ModalFormWrapper>
  );
};

export default UpdateUserProfileForm;
