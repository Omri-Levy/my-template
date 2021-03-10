import { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '@my-template/shared';
import { FaSignInAlt } from 'react-icons/fa';
import { BoxProps } from '@chakra-ui/react';
import Form from '../Form';
import FormFields from '../FormFields';
import useSignIn from '../../../hooks/api/useSignIn';

/**
 * TODO: update description
 */
const SignInForm: FunctionComponent<BoxProps> = () => {
  const schema = useMemo(() => signInSchema, []);
  const {
    errors,
    clearErrors,
    handleSubmit,
    register,
    setError,
    formState,
    getValues,
  } = useForm({
    mode: `onChange`,
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = formState;
  const signIn = useSignIn(setError);

  return (
    <Form
      errors={errors}
      getValues={getValues}
      handleSubmit={handleSubmit}
      onSubmit={signIn}
      isSubmitting={isSubmitting}
      submitButtonText={`Sign In`}
      submitButtonIcon={FaSignInAlt}
    >
      <FormFields
        errors={errors}
        clearErrors={clearErrors}
        register={register}
        formType={`signIn`}
      />
    </Form>
  );
};

export default SignInForm;
