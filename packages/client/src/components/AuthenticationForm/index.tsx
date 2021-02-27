import { Button } from '@chakra-ui/react';
import { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema, signUpSchema } from '@my-template/shared';
import Page from '../Page';
import FormFields from './FormFields';
import useDisableSubmit from '../../hooks/useDisableSubmit';
import Recaptcha from '../Recaptcha';
import useGRecaptchaResponse from '../../hooks/useGRecaptchaResponse';
import useAuthentication from '../../hooks/useAuthentication';
import { Props } from './types';

/**
 * @description a form component for both sign up and sign in with all their
 * shared logic with individual logic decided based on the formType prop
 */
const AuthenticationForm: FunctionComponent<Props> = ({ formType }) => {
  const formTitle = formType === `signUp` ? `Sign Up` : `Sign In`;
  const isSignUp = formType === `signUp`;
  const schema = useMemo(() => (isSignUp ? signUpSchema : signInSchema), [
    isSignUp,
  ]);
  const {
    errors,
    setError,
    clearErrors,
    handleSubmit,
    register,
    formState,
    getValues,
  } = useForm({
    mode: `onChange`,
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = formState;
  const { gRecaptchaResponse, setGRecaptchaResponse } = useGRecaptchaResponse();
  const { disableSubmit } = useDisableSubmit(
    errors,
    getValues,
    gRecaptchaResponse
  );
  const { onSubmit } = useAuthentication(formType, setError);

  return (
    <Page title={formTitle}>
      <form onSubmit={handleSubmit(onSubmit(gRecaptchaResponse))}>
        <FormFields
          errors={errors}
          clearErrors={clearErrors}
          register={register}
          formType={formType}
        />
        <Recaptcha
          setGRecaptchaResponse={setGRecaptchaResponse}
          errors={errors}
        />
        <Button
          type={`submit`}
          mt={4}
          isLoading={isSubmitting}
          disabled={disableSubmit}
        >
          {formTitle}
        </Button>
      </form>
    </Page>
  );
};

export default AuthenticationForm;
