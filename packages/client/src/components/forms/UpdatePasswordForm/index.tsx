import { FunctionComponent, useContext, useMemo } from 'react';
import {
  invalidNewPasswordMessage,
  invalidOldPasswordMessage,
  updatePasswordSchema,
} from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUserEdit } from 'react-icons/fa';
import { useDisclosure } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import ModalFormWrapper from '../ModalFormWrapper';
import ModalForm from '../ModalFormWrapper/ModalForm';
import FormFields from '../FormFields';
import { UpdatePassword } from '../../pages/Profile/types';
import setResponseError from '../FormResponseError/setResponseError';
import fetchUpdatePassword from '../../../utils/api/fetchUpdatePassword';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';
import useSuccessToast from '../../../hooks/ui/useSuccessToast';

const UpdatePasswordForm: FunctionComponent = () => {
  const schema = useMemo(() => updatePasswordSchema, []);
  const {
    errors,
    clearErrors,
    getValues,
    handleSubmit,
    formState,
    register,
    setError,
    watch,
  } = useForm({
    mode: `onChange`,
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = formState;
  const disclosure = useDisclosure();
  const { authenticate } = useContext(AuthenticationContext);
  const { onClose } = disclosure;
  const {
    toast: updatePasswordSuccessToast,
    toastOptions: updatePasswordSuccessToastOptions,
  } = useSuccessToast(`Updated password successfully.`);
  const { replace } = useHistory();
  const updatePassword: UpdatePassword = () => async (data) => {
    try {
      await fetchUpdatePassword(data);

      await authenticate();

      replace(`/signIn`, {
        toast: updatePasswordSuccessToast(updatePasswordSuccessToastOptions),
      });
    } catch (error) {
      console.error(error);

      setResponseError(error, setError, [invalidOldPasswordMessage]);
    }
  };
  const disableSubmitCondition = () => {
    const { newPassword, oldPassword } = watch([`newPassword`, `oldPassword`]);

    return newPassword === oldPassword;
  };

  return (
    <ModalFormWrapper
      headerIcon={FaUserEdit}
      headerText={`Update Password`}
      disclosure={disclosure}
      toggleButtonIcon={FaUserEdit}
      toggleButtonText={`Update Password`}
      buttonProps={{
        width: `50%`,
        marginRight: 0,
      }}
    >
      <ModalForm
        useRecaptcha={false}
        submitButtonIcon={FaUserEdit}
        submitButtonText={`Update Password`}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        onSubmit={updatePassword}
        errors={errors}
        getValues={getValues}
        onClose={onClose}
        disableSubmitCondition={disableSubmitCondition}
        submitButtonDisabledTitle={invalidNewPasswordMessage}
      >
        <FormFields
          formType={`updatePassword`}
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
      </ModalForm>
    </ModalFormWrapper>
  );
};

export default UpdatePasswordForm;
