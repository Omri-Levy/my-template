import { Box, Button, Icon, Text } from '@chakra-ui/react';
import { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema, signUpSchema } from '@my-template/shared';
import { FaSignInAlt, FaUserPlus } from 'react-icons/all';
import Page from '../../pages/Page';
import FormFields from './FormFields';
import useDisableSubmit from '../../../hooks/useDisableSubmit';
import Recaptcha from '../Recaptcha';
import useGRecaptchaResponse from '../../../hooks/useGRecaptchaResponse';
import useAuthentication from '../../../hooks/useAuthentication';
import { Props } from './types';

/**
 * @description a forms component for both sign up and sign in with all their
 * shared logic with individual logic decided based on the formType prop
 */
const AuthenticationForm: FunctionComponent<Props> = ({
  formType,
  ...props
}) => {
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
    <Page title={formTitle} icon={isSignUp ? FaUserPlus : FaSignInAlt}>
      <Box
        as={`form`}
        onSubmit={handleSubmit(onSubmit(gRecaptchaResponse))}
        width={`100%`}
        {...props}
      >
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
          rightIcon={<Icon as={isSignUp ? FaUserPlus : FaSignInAlt} mb={0.3} />}
          type={`submit`}
          mt={4}
          isLoading={isSubmitting}
          disabled={disableSubmit}
        >
          <Text>{formTitle}</Text>
        </Button>
      </Box>
    </Page>
  );
};

export default AuthenticationForm;
