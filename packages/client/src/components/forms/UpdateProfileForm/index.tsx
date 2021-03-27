import { FunctionComponent, useMemo, useState } from 'react';
import {
  personalInformationSchema,
  serverErrorMessage,
} from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUserEdit } from 'react-icons/fa';
import { useDisclosure } from '@chakra-ui/react';
import ModalFormWrapper from '../ModalFormWrapper';
import { UpdateProfile } from '../../pages/Profile/types';
import ModalForm from '../ModalFormWrapper/ModalForm';
import FormFields from '../FormFields';
import Alert from '../../Alert';

const UpdateProfileForm: FunctionComponent = () => {
  const schema = useMemo(() => personalInformationSchema, []);
  const {
    errors,
    clearErrors,
    getValues,
    handleSubmit,
    formState,
    register,
  } = useForm({
    mode: `onChange`,
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = formState;
  const [errorMessage, setErrorMessage] = useState(``);
  const alertDisclosure = useDisclosure();
  const disclosure = useDisclosure();
  const { onClose } = disclosure;
  const onSubmit: UpdateProfile = () => async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);

      setErrorMessage(serverErrorMessage);
    }

    onClose();
  };

  return (
    <ModalFormWrapper
      headerIcon={FaUserEdit}
      headerText={`Update Profile`}
      disclosure={disclosure}
      toggleButtonIcon={FaUserEdit}
      toggleButtonText={`Update Profile`}
    >
      <ModalForm
        useRecaptcha={false}
        submitButtonIcon={FaUserEdit}
        submitButtonText={`Update Profile`}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        errors={errors}
        getValues={getValues}
        onClose={onClose}
      >
        <FormFields
          formType={`updateProfile`}
          errors={errors}
          clearErrors={clearErrors}
          register={register}
        />
        <Alert
          status={`error`}
          mt={5}
          message={errorMessage || ``}
          disclosure={alertDisclosure}
          closeable
        />
      </ModalForm>
    </ModalFormWrapper>
  );
};

export default UpdateProfileForm;
