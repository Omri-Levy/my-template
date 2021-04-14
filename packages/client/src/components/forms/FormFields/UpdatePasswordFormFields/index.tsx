import { FunctionComponent, useContext } from 'react';
import { FaKey } from 'react-icons/fa';
import { invalidOldPasswordMessage } from '@my-template/shared';
import FormField from '../../FormField';
import clearResponseError from '../../FormResponseError/clearResponseError';
import { Props } from '../types';
import AuthenticationContext from '../../../../context/AuthenticationContext/AuthenticationContext';
import NoUserFound from '../../../NoUserFound';

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
    <>
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
        {...props}
      />
    </>
  );
};

export default UpdatePasswordFormFields;
