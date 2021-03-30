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
import ModalFormWrapper from '../ModalFormWrapper';
import { UpdateProfile } from '../../pages/Profile/types';
import ModalForm from '../ModalFormWrapper/ModalForm';
import FormFields from '../FormFields';
import NoUserFound from '../../NoUserFound';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';
import fetchUpdateProfile from '../../../utils/api/fetchUpdateProfile';
import setResponseError from '../FormResponseError/setResponseError';
import useSuccessToast from '../../../hooks/ui/useSuccessToast';

const UpdateProfileForm: FunctionComponent = () => {
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
    toast: updateProfileSuccessToast,
    toastOptions: updateProfileSuccessToastOptions,
  } = useSuccessToast(`Updated profile successfully.`);
  const updateProfile: UpdateProfile = () => async (data) => {
    try {
      await fetchUpdateProfile(data);

      onClose();

      updateProfileSuccessToast(updateProfileSuccessToastOptions);

      await authenticate();
    } catch (error) {
      console.error(error);

      setResponseError(error, setError, [emailAlreadyInUseMessage]);
      onOpen();
    }
  };
  const { currentUser } = useContext(AuthenticationContext);
  const authenticatedUser = currentUser as UserObject;
  const disableSubmitCondition = () => {
    const formValues = watch();
    const unchangedEmail = formValues?.email === authenticatedUser?.email;
    const unchangedFirstName =
      formValues?.fname === authenticatedUser?.firstName;
    const unchangedLastName = formValues?.lname === authenticatedUser?.lastName;

    return unchangedEmail && unchangedFirstName && unchangedLastName;
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
        width: `50%`,
      }}
    >
      <ModalForm
        useRecaptcha={false}
        submitButtonIcon={FaUserEdit}
        submitButtonText={`Update Profile`}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        onSubmit={updateProfile}
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

export default UpdateProfileForm;
