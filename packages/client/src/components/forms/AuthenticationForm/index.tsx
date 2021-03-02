import { Icon } from '@chakra-ui/react';
import { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema, signUpSchema } from '@my-template/shared';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import Page from '../../pages/Page';
import FormFields from './FormFields';
import { Props } from './types';
import Form from '../Form';
import useAuthentication from '../../../hooks/useAuthentication';

/**
 * @description a forms component for both sign up and sign in with all their
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
  const { onSubmit } = useAuthentication(formType, setError);

  return (
    <Page title={formTitle} icon={isSignUp ? FaUserPlus : FaSignInAlt}>
      <Form
        errors={errors}
        getValues={getValues}
        icon={<Icon as={isSignUp ? FaUserPlus : FaSignInAlt} mb={0.3} />}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
        submitButtonText={formTitle}
      >
        <FormFields
          errors={errors}
          clearErrors={clearErrors}
          register={register}
          formType={formType}
        />
      </Form>
    </Page>
  );
};

export default AuthenticationForm;
