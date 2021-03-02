import { FunctionComponent } from 'react';
import { FaAt, FaLock, FaShieldAlt, FaSignature } from 'react-icons/fa';
import {
  emailAlreadyInUseMessage,
  invalidPasswordPolicyMessage,
  securityQuestions,
} from '@my-template/shared';
import {
  FormControl,
  FormLabel,
  Icon,
  InputGroup,
  InputLeftElement,
  Select,
} from '@chakra-ui/react';
import { Props } from './types';
import FormField from '../../FormField';
import generateHelperText from './generateHelperText';
import clearResponseError from '../../FormResponseError/clearResponseError';
import ForgotPasswordLink from '../../../pages/SignIn/ForgotPasswordLink';

const FormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
  formType,
}) => {
  const isSignUp = formType === `signUp`;
  const helperText = generateHelperText(isSignUp);
  const isEmailAlreadyInUse =
    errors.responseError?.message === emailAlreadyInUseMessage;

  return (
    <>
      {isSignUp && (
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
            color={`gray.300`}
            helperText={helperText(`Example: John`)}
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
            color={`gray.300`}
            helperText={helperText(`Example: Doe`)}
          />
        </>
      )}
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
        color={`gray.300`}
        helperText={helperText(`Example: example@address.com`)}
      />
      {isSignUp && (
        <>
          <FormControl
            isRequired
            id={`securityQuestion`}
            className={`selectWithIcon`}
            isInvalid={!!errors.securityQuestion}
          >
            <FormLabel>Security Question: </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents={`none`}>
                <Icon as={FaShieldAlt} />
              </InputLeftElement>
              <Select placeholder={`Select security question`} mb={5}>
                {securityQuestions.map((securityQuestion) => (
                  <option key={securityQuestion} value={securityQuestion}>
                    {securityQuestion}
                  </option>
                ))}
              </Select>
            </InputGroup>
          </FormControl>
          <FormField
            isRequired
            labelTitle={`Security Answer:`}
            name={`securityAnswer`}
            errors={errors}
            register={register}
            type={`text`}
            maxLength={70}
            icon={FaShieldAlt}
            color={`gray.300`}
          />
        </>
      )}
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
        color={`gray.300`}
        helperText={helperText(invalidPasswordPolicyMessage)}
        mb={!isSignUp ? 1 : undefined}
      />
      {!isSignUp && <ForgotPasswordLink />}
      {isSignUp && (
        <FormField
          isRequired
          labelTitle={`Password Confirmation:`}
          name={`passwordConfirmation`}
          errors={errors}
          register={register}
          type={`password`}
          maxLength={128}
          icon={FaLock}
          color={`gray.300`}
          mb={10}
        />
      )}
    </>
  );
};

export default FormFields;
