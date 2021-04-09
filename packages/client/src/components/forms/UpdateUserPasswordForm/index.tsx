import { FunctionComponent, useMemo } from 'react';
import {
  invalidNewPasswordMessage,
  invalidOldPasswordMessage,
  updateUserPasswordSchema,
} from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUserEdit } from 'react-icons/fa';
import { useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import ModalFormWrapper from '../ModalFormWrapper';
import ModalForm from '../ModalFormWrapper/ModalForm';
import FormFields from '../FormFields';
import setResponseError from '../FormResponseError/setResponseError';
import useSuccessToast from '../../../hooks/ui/useSuccessToast';
import { UpdateUserPassword } from '../../pages/Profile/types';
import { Props } from './types';
import fetchUpdateUserPassword from '../../../utils/api/fetchUpdateUserPassword';

/**
 * TODO: refactor to the controller pattern
 * TODO: merge Update and UpdateUserX logic
 */
const UpdateUserPasswordForm: FunctionComponent<Props> = ({ userIds }) => {
  const schema = useMemo(() => updateUserPasswordSchema, []);
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
  const { onClose } = disclosure;
  const {
    toast: updateUserPasswordSuccessToast,
    toastOptions: updateUserPasswordSuccessToastOptions,
  } = useSuccessToast(`Updated user password successfully.`);
  const updateUserPassword: UpdateUserPassword = () => async (data) => {
    try {
      await fetchUpdateUserPassword(userIds[0], data);

      onClose();

      updateUserPasswordSuccessToast(updateUserPasswordSuccessToastOptions);
    } catch (error) {
      console.error(error);

      setResponseError(error, setError, [invalidOldPasswordMessage]);
    }
  };
  const oneUserSelected = userIds.length === 1;
  const disableSubmitCondition = () => {
    const { newPassword, oldPassword } = watch([`newPassword`, `oldPassword`]);

    return newPassword === oldPassword || !oneUserSelected;
  };
  const isMobile = useBreakpointValue({ base: true, sm: false });

  return (
    <ModalFormWrapper
      headerIcon={FaUserEdit}
      headerText={`Update Password`}
      disclosure={disclosure}
      toggleButtonIcon={FaUserEdit}
      toggleButtonText={`Update Password`}
      toggleButtonColor={`blue`}
      buttonProps={{
        marginRight: 0,
        isFullWidth: isMobile,
        mb: { base: 5, sm: 0 },
        disabled: !oneUserSelected,
        title: !oneUserSelected
          ? `Please make sure a single user is selected.`
          : undefined,
      }}
    >
      <ModalForm
        useRecaptcha={false}
        submitButtonIcon={FaUserEdit}
        submitButtonText={`Update Password`}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        onSubmit={updateUserPassword}
        errors={errors}
        getValues={getValues}
        onClose={onClose}
        disableSubmitCondition={disableSubmitCondition}
        submitButtonDisabledTitle={invalidNewPasswordMessage}
      >
        <FormFields
          formType={`updateUserPassword`}
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
      </ModalForm>
    </ModalFormWrapper>
  );
};

export default UpdateUserPasswordForm;
