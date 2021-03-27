import { FunctionComponent, useMemo, useState } from 'react';
import {
  personalInformationSchema,
  serverErrorMessage,
} from '@my-template/shared';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaUserEdit } from 'react-icons/fa';
import { useDisclosure } from '@chakra-ui/react';
import FormFields from '../FormFields';
import ModalForm from '../ModalForm';
import { UpdateProfile } from '../../pages/Profile/types';

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
    reValidateMode: `onChange`,
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = formState;
  const alertDisclosure = useDisclosure();
  const [errorMessage, setErrorMessage] = useState(``);
  const disclosure = useDisclosure();
  const { onClose } = disclosure;
  const onSubmit: UpdateProfile = () => async (data) => {
    try {
      alert(data);

      onClose();
    } catch (error) {
      console.error(error);

      setErrorMessage(serverErrorMessage);
    }
  };

  return (
    <ModalForm
      headerIcon={FaUserEdit}
      headerText={`Update Profile`}
      alertDisclosure={alertDisclosure}
      disclosure={disclosure}
      toggleButtonText={`UpdateProfile`}
      errorMessage={errorMessage}
      getValues={getValues}
      isSubmitting={isSubmitting}
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      useRecaptcha={false}
      submitButtonText={`Update Profile`}
      submitButtonIcon={FaUserEdit}
    >
      <FormFields
        formType={`updateProfile`}
        errors={errors}
        clearErrors={clearErrors}
        register={register}
      />
    </ModalForm>
  );
};

export default UpdateProfileForm;
