import { Fragment, FunctionComponent, useContext } from 'react';
import { FaKey } from 'react-icons/fa';
import {
  invalidOldPasswordMessage,
  UserObject,
  Users,
} from '@my-template/shared';
import { Box } from '@chakra-ui/react';
import FormField from '../../FormField';
import clearResponseError from '../../FormResponseError/clearResponseError';
import { Props } from '../types';
import AuthenticationContext from '../../../../context/AuthenticationContext/AuthenticationContext';
import NoUserFound from '../../../NoUserFound';
import useUserIds from '../../../../hooks/caching/useUserIds';
import queryClient from '../../../globals/Providers/queryClient';

/**
 * TODO: update description
 */
const UpdatePasswordFormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
  isAdminAction,
  ...props
}) => {
  const { currentUser } = useContext(AuthenticationContext);
  const { userIds } = useUserIds();
  const users = queryClient.getQueryData(`users`) as Users;
  const { role: currentUserRole } = currentUser as UserObject;
  const userToUpdate = users?.filter((user) => user?.id === userIds[0])[0];
  const unauthorized =
    currentUserRole !== `admin` && userToUpdate?.role === `admin`;
  const ConditionalWrapper = unauthorized ? Box : Fragment;
  const conditionalProps = unauthorized
    ? {
        cursor: `not-allowed`,
        title: `Only admins may update other admins.`,
      }
    : undefined;

  if (!currentUser) {
    return <NoUserFound />;
  }

  let isWrongOldPassword;
  let onChange;

  if (!isAdminAction) {
    isWrongOldPassword =
      errors?.responseError?.message === invalidOldPasswordMessage;

    if (isWrongOldPassword) {
      onChange = clearResponseError(clearErrors);
    }
  }

  return (
    <ConditionalWrapper {...conditionalProps}>
      {!isAdminAction && (
        <FormField
          isRequired
          onChange={onChange}
          labelTitle={`Old Password:`}
          name={`oldPassword`}
          errors={errors}
          register={register}
          type={`password`}
          maxLength={128}
          icon={FaKey}
          inputProps={{
            autoComplete: `off`,
          }}
          {...props}
        />
      )}
      <FormField
        isRequired
        labelTitle={`New Password:`}
        name={`newPassword`}
        errors={errors}
        register={register}
        type={`password`}
        maxLength={128}
        icon={FaKey}
        inputProps={{
          autoComplete: `new-password`,
        }}
        isDisabled={unauthorized}
        pointerEvents={unauthorized ? `none` : undefined}
        {...props}
      />
      <FormField
        isRequired
        labelTitle={`New Password Confirmation:`}
        name={`newPasswordConfirmation`}
        errors={errors}
        register={register}
        type={`password`}
        maxLength={128}
        icon={FaKey}
        mb={10}
        inputProps={{
          autoComplete: `off`,
        }}
        isDisabled={unauthorized}
        pointerEvents={unauthorized ? `none` : undefined}
        {...props}
      />
    </ConditionalWrapper>
  );
};

export default UpdatePasswordFormFields;
