import { FunctionComponent } from 'react';
import { FaAt, FaSignature } from 'react-icons/fa';
import FormField from '../../../FormField';
import clearResponseError from '../../../FormResponseError/clearResponseError';
import { Props } from '../../types';

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
      iconColor={`gray.300`}
      helperText={`Example: John`}
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
      iconColor={`gray.300`}
      helperText={`Example: Doe`}
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
      iconColor={`gray.300`}
      helperText={`Example: example@address.com`}
    />
  </>
);

export default PersonalInformationFormFields;
