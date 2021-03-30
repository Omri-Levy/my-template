import { FunctionComponent, useContext } from 'react';
import { FaLock } from 'react-icons/fa';
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
  ...props
}) => {
  const isWrongOldPassword =
    errors?.responseError?.message === invalidOldPasswordMessage;
  const { currentUser } = useContext(AuthenticationContext);

  if (!currentUser) {
    return <NoUserFound />;
  }

  return (
    <>
      <FormField
        isRequired
        onChange={
          isWrongOldPassword ? clearResponseError(clearErrors) : undefined
        }
        labelTitle={`Old Password:`}
        name={`oldPassword`}
        errors={errors}
        register={register}
        type={`password`}
        maxLength={128}
        icon={FaLock}
        inputProps={{
          autoComplete: `off`,
        }}
        {...props}
      />
      <FormField
        isRequired
        labelTitle={`New Password:`}
        name={`newPassword`}
        errors={errors}
        register={register}
        type={`password`}
        maxLength={128}
        icon={FaLock}
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
        icon={FaLock}
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
