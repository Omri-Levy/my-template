import { FunctionComponent } from 'react';
import { FaLock, FaShieldAlt } from 'react-icons/fa';
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
        iconColor={`gray.300`}
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
        iconColor={`gray.300`}
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
        icon={FaLock}
        iconColor={`gray.300`}
        helperText={invalidPasswordPolicyMessage}
      />
      <FormField
        isRequired
        labelTitle={`Password Confirmation:`}
        name={`passwordConfirmation`}
        errors={errors}
        register={register}
        type={`password`}
        maxLength={128}
        icon={FaLock}
        iconColor={`gray.300`}
        mb={10}
      />
    </>
  );
};

export default SecurityInformationFormFields;
