import { FunctionComponent, useContext } from 'react';
import { FaAt, FaSignature } from 'react-icons/fa';
import { UserObject } from '@my-template/shared';
import FormField from '../../FormField';
import clearResponseError from '../../FormResponseError/clearResponseError';
import { Props } from '../types';
import AuthenticationContext from '../../../../context/AuthenticationContext/AuthenticationContext';
import NoUserFound from '../../../NoUserFound';

/**
 * TODO: update description
 */
const UpdateProfileFormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
  ...props
}) => {
  const onChange = errors?.responseError?.message
    ? clearResponseError(clearErrors)
    : undefined;
  const { currentUser } = useContext(AuthenticationContext);

  if (!currentUser) {
    return <NoUserFound />;
  }

  const { email, firstName, lastName } = currentUser as UserObject;

  return (
    <>
      <FormField
        onChange={onChange}
        labelTitle={`Email:`}
        name={`email`}
        errors={errors}
        register={register}
        type={`email`}
        maxLength={320}
        icon={FaAt}
        inputProps={{ defaultValue: email }}
        {...props}
      />
      <FormField
        labelTitle={`First Name:`}
        name={`fname`}
        errors={errors}
        register={register}
        type={`text`}
        maxLength={35}
        icon={FaSignature}
        inputProps={{ defaultValue: firstName }}
        {...props}
      />
      <FormField
        labelTitle={`Last Name:`}
        name={`lname`}
        errors={errors}
        register={register}
        type={`text`}
        maxLength={35}
        icon={FaSignature}
        inputProps={{ defaultValue: lastName }}
        {...props}
      />
    </>
  );
};

export default UpdateProfileFormFields;
