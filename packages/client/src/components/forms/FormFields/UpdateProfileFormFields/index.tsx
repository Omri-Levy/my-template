import { FunctionComponent, useContext } from 'react';
import { FaAt, FaSignature } from 'react-icons/fa';
import { roles, UserObject, Users } from '@my-template/shared';
import { Roles } from '@my-template/shared/src/utils/types';
import FormField from '../../FormField';
import clearResponseError from '../../FormResponseError/clearResponseError';
import { Props } from '../types';
import AuthenticationContext from '../../../../context/AuthenticationContext/AuthenticationContext';
import NoUserFound from '../../../NoUserFound';
import useUserIds from '../../../../hooks/useUserIds';
import queryClient from '../../../globals/Providers/queryClient';
import useIsAdmin from '../../../../hooks/useIsAdmin';

/**
 * TODO: update description
 */
const UpdateProfileFormFields: FunctionComponent<Props> = ({
  errors,
  clearErrors,
  register,
  isAdminAction,
  ...props
}) => {
  const onChange = errors?.responseError?.message
    ? clearResponseError(clearErrors)
    : undefined;
  const { currentUser } = useContext(AuthenticationContext);
  const { userIds } = useUserIds();
  const users = queryClient.getQueryData(`users`) as Users;
  const isAdmin = useIsAdmin();

  if (!currentUser) {
    return <NoUserFound />;
  }

  let userToUpdate = currentUser as UserObject;
  let email = userToUpdate?.email;
  let firstName = userToUpdate?.firstName;
  let lastName = userToUpdate?.lastName;
  let selectOptions;

  if (isAdminAction && isAdmin) {
    userToUpdate = users.filter(
      (user) => user.id === userIds[0]
    )[0] as UserObject;

    const role = userToUpdate?.role as Roles;
    const restOfRoles = roles.filter((otherRole) => otherRole !== role);
    selectOptions = [role, ...restOfRoles];

    email = userToUpdate?.email;
    firstName = userToUpdate?.firstName;
    lastName = userToUpdate?.lastName;
  }

  return (
    <>
      <FormField
        onChange={onChange}
        labelTitle={`Email:`}
        name={`email`}
        errors={errors}
        register={register}
        type={`email`}
        maxLength={320}
        icon={FaAt}
        inputProps={{ defaultValue: email }}
        {...props}
      />
      <FormField
        labelTitle={`First Name:`}
        name={`fname`}
        errors={errors}
        register={register}
        type={`text`}
        maxLength={35}
        icon={FaSignature}
        inputProps={{ defaultValue: firstName }}
        {...props}
      />
      <FormField
        labelTitle={`Last Name:`}
        name={`lname`}
        errors={errors}
        register={register}
        type={`text`}
        maxLength={35}
        icon={FaSignature}
        inputProps={{ defaultValue: lastName }}
        {...props}
      />
      {isAdminAction && (
        <FormField
          isSelectField
          selectOptions={selectOptions}
          labelTitle={`Role:`}
          name={`role`}
          errors={errors}
          register={register}
          type={`text`}
          maxLength={35}
          icon={FaSignature}
          selectProps={{ textTransform: `capitalize` }}
          optionsProps={{ textTransform: `capitalize` }}
          inputProps={{ defaultValue: lastName, textTransform: `capitalize` }}
          {...props}
        />
      )}
    </>
  );
};

export default UpdateProfileFormFields;
