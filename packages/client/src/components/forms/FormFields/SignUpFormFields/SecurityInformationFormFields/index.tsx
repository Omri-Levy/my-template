import { FunctionComponent } from 'react';
import { FaKey, FaShieldAlt } from 'react-icons/fa';
import {
  emailAlreadyInUseMessage,
  invalidPasswordPolicyMessage,
  securityQuestions,
} from '@my-template/shared';
import FormField from '../../../FormField';
import clearResponseError from '../../../FormResponseError/clearResponseError';
import { Props } from '../../types';
import { securityQuestionPlaceholder } from '../../../../../utils/constants';

/**
 * TODO: update description
 */
const SecurityInformationFormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
  ...props
}) => {
  const isEmailAlreadyInUse =
    errors?.responseError?.message === emailAlreadyInUseMessage;

  return (
    <>
      <FormField
        isSelectField
        selectOptions={securityQuestions}
        selectPlaceholder={securityQuestionPlaceholder}
        isRequired
        labelTitle={`Security Question:`}
        name={`securityQuestion`}
        errors={errors}
        register={register}
        type={`text`}
        icon={FaShieldAlt}
        {...props}
      />
      <FormField
        isRequired
        labelTitle={`Security Answer:`}
        name={`securityAnswer`}
        errors={errors}
        register={register}
        type={`text`}
        maxLength={70}
        icon={FaShieldAlt}
        inputProps={{
          autoComplete: `new-password`,
        }}
        {...props}
      />
      <FormField
        onChange={
          !isEmailAlreadyInUse ? clearResponseError(clearErrors) : undefined
        }
        isRequired
        labelTitle={`Password:`}
        name={`password`}
        errors={errors}
        register={register}
        type={`password`}
        maxLength={128}
        icon={FaKey}
        helperText={invalidPasswordPolicyMessage}
        {...props}
      />
      <FormField
        isRequired
        labelTitle={`Password Confirmation:`}
        name={`passwordConfirmation`}
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

export default SecurityInformationFormFields;
