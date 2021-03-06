import { FunctionComponent, useMemo } from 'react';
import { FaRedoAlt } from 'react-icons/fa';
import { forgotPasswordSchema } from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormFields from '../FormFields';
import Form from '../Form';
import onSubmit from '../onSubmit';

/**
 * TODO: update description
 */
const ForgotPasswordForm: FunctionComponent = () => {
  const schema = useMemo(() => forgotPasswordSchema, []);
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
  const submitFn = onSubmit(`forgotPassword`, setError);

  return (
    <Form
      errors={errors}
      getValues={getValues}
      handleSubmit={handleSubmit}
      onSubmit={submitFn}
      isSubmitting={isSubmitting}
      submitButtonText={`Reset Password`}
      submitButtonIcon={FaRedoAlt}
    >
      <FormFields
        errors={errors}
        clearErrors={clearErrors}
        register={register}
        formType={`forgotPassword`}
      />
    </Form>
  );
};

export default ForgotPasswordForm;
