import { FunctionComponent, useContext, useMemo } from 'react';
import {
  invalidNewPasswordMessage,
  invalidOldPasswordMessage,
  updateUserPasswordSchema,
  UserObject,
  Users,
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
import useDarkMode from '../../../hooks/ui/useDarkMode';
import queryClient from '../../globals/Providers/queryClient';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';

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
  const { activateToast } = useSuccessToast(
    `updatedUserPassword`,
    `Updated user password successfully.`
  );
  const updateUserPassword: UpdateUserPassword = () => async (data) => {
    try {
      await fetchUpdateUserPassword(userIds[0], data);

      onClose();

      activateToast();
    } catch (error) {
      console.error(error);

      setResponseError(error, setError, [invalidOldPasswordMessage]);
    }
  };
  const oneUserSelected = userIds?.length === 1;
  const { currentUser } = useContext(AuthenticationContext);
  const { role: currentUserRole } = currentUser as UserObject;
  const users = queryClient.getQueryData(`users`) as Users;
  const userToUpdate = users?.filter((user) => user?.id === userIds[0])[0];
  const userToUpdateRole = userToUpdate?.role;
  const disableSubmitCondition = () => {
    const { newPassword, oldPassword } = watch([`newPassword`, `oldPassword`]);

    return unauthorized || newPassword === oldPassword || !oneUserSelected;
  };
  const noSpaceForActions = useBreakpointValue({
    base: true,
    xl: false,
  });
  const { darkModeTextColorInverted, darkModeColor } = useDarkMode();
  const unauthorized =
    currentUserRole !== `admin` && userToUpdateRole === `admin`;

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
        isFullWidth: noSpaceForActions,
        mb: { base: 5, xl: 0 },
        disabled: unauthorized || !oneUserSelected,
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
