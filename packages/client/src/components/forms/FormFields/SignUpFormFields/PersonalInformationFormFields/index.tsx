import { FunctionComponent } from 'react';
import { FaAt, FaSignature } from 'react-icons/fa';
import FormField from '../../../FormField';
import clearResponseError from '../../../FormResponseError/clearResponseError';
import { Props } from '../../types';
import {
  emailHelperText,
  firstNameHelperText,
  lastNameHelperText,
} from '../../../../../utils/constants';

/**
 * TODO: update description
 */
const PersonalInformationFormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
}) => (
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
    />
    <FormField
      onChange={clearResponseError(clearErrors)}
      isRequired
      labelTitle={`Email:`}
      name={`email`}
      errors={errors}
      register={register}
      type={`email`}
      maxLength={320}
      icon={FaAt}
      helperText={emailHelperText}
    />
  </>
);

export default PersonalInformationFormFields;
