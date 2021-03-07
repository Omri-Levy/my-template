import { FunctionComponent, useMemo } from 'react';
import { FaRedoAlt } from 'react-icons/fa';
import {
  forgotPasswordMessage,
  forgotPasswordSchema,
} from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDisclosure } from '@chakra-ui/react';
import FormFields from '../FormFields';
import Form from '../Form';
import onSubmit from '../onSubmit';
import Alert from '../../Alert';

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
  const disclosure = useDisclosure();
  const { onOpen } = disclosure;
  const callback = () => {
    onOpen();
  };
  const submitFn = onSubmit(`forgotPassword`, setError, undefined, callback);

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
      <Alert
        status={`info`}
        message={forgotPasswordMessage}
        closeable
        disclosure={disclosure}
      />
    </Form>
  );
};

export default ForgotPasswordForm;
