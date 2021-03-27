import { FunctionComponent } from 'react';
import { FaAt, FaSignature } from 'react-icons/fa';
import FormField from '../../FormField';
import clearResponseError from '../../FormResponseError/clearResponseError';
import { Props } from '../types';

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

  return (
    <>
      <FormField
        onChange={onChange}
        isRequired
        labelTitle={`Email:`}
        name={`email`}
        errors={errors}
        register={register}
        type={`email`}
        maxLength={320}
        icon={FaAt}
        {...props}
      />
      <FormField
        isRequired
        labelTitle={`First Name:`}
        name={`fname`}
        errors={errors}
        register={register}
        type={`text`}
        maxLength={35}
        icon={FaSignature}
      />
      <FormField
        isRequired
        labelTitle={`Last Name:`}
        name={`lname`}
        errors={errors}
        register={register}
        type={`text`}
        maxLength={35}
        icon={FaSignature}
      />
    </>
  );
};

export default UpdateProfileFormFields;
