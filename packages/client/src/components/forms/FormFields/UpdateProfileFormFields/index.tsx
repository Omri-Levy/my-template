import { FunctionComponent, useContext } from 'react';
import { FaAt, FaSignature } from 'react-icons/fa';
import { Role, Roles, UserObject, Users } from '@my-template/shared';
import { useQuery } from 'react-query';
import FormField from '../../FormField';
import clearResponseError from '../../FormResponseError/clearResponseError';
import { Props } from '../types';
import AuthenticationContext from '../../../../context/AuthenticationContext/AuthenticationContext';
import NoUserFound from '../../../NoUserFound';
import useUserIds from '../../../../hooks/useUserIds';
import queryClient from '../../../globals/Providers/queryClient';
import fetchGetRoles from '../../../../utils/api/fetchGetRoles';
import AuthorizationContext from '../../../../context/AuthorizationContext/AuthorizationContext';

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
  const { data: roles } = useQuery(`roles`, fetchGetRoles);
  const { isAuthorized } = useContext(AuthorizationContext);

  if (!currentUser) {
    return <NoUserFound />;
  }

  const typesafeCurrentUser = currentUser as UserObject;
  let userToUpdate = typesafeCurrentUser;
  let email = userToUpdate?.email;
  let firstName = userToUpdate?.firstName;
  let lastName = userToUpdate?.lastName;
  let selectOptions;
  let currentUserIsAdmin = false;

  /**
   * client side barrier to stop updating other users's role with the same
   * role as the current user.
   */
  if (isAdminAction && isAuthorized) {
    userToUpdate = users.filter(
      (user) => user.id === userIds[0]
    )[0] as UserObject;
    const role = userToUpdate?.role as Role;

    currentUserIsAdmin = typesafeCurrentUser?.role === `admin`;

    const restOfRoles = roles?.filter(
      (otherRole) => otherRole !== role
    ) as Roles;

    if (!currentUserIsAdmin) {
      selectOptions = [role];
    } else {
      selectOptions = restOfRoles && [role, ...restOfRoles];
    }

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
          isDisabled={!currentUserIsAdmin}
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
