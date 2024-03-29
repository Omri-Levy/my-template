import { FunctionComponent } from 'react';
import { FaAt, FaSignature } from 'react-icons/fa';
import FormField from '../../../FormField';
import { Props } from '../../types';
import {
  emailHelperText,
  firstNameHelperText,
  lastNameHelperText,
} from '../../../../../utils/constants';
import clearIfResponseError from '../../../../../utils/clearIfResponseError';

/**
 * TODO: update description
 */
const PersonalInformationFormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
  ...props
}) => {
  const onChange = clearIfResponseError(errors, clearErrors);

  return (
    <>
      <FormField
        isRequired
        labelTitle={`First Name:`}
        name={`fname`}
        errors={errors}
        register={register}
        type={`text`}
        maxLength={35}
        icon={FaSignature}
        helperText={firstNameHelperText}
        {...props}
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
        helperText={lastNameHelperText}
        {...props}
      />
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
        helperText={emailHelperText}
        {...props}
      />
    </>
  );
};

export default PersonalInformationFormFields;
