import { Fragment, FunctionComponent, useContext } from 'react';
import { FaAt, FaSignature } from 'react-icons/fa';
import { Roles, UserObject, Users } from '@my-template/shared';
import { useQuery } from 'react-query';
import { Box } from '@chakra-ui/react';
import FormField from '../../FormField';
import { Props } from '../types';
import AuthenticationContext from '../../../../context/AuthenticationContext/AuthenticationContext';
import NoUserFound from '../../../NoUserFound';
import useUserIds from '../../../../hooks/caching/useUserIds';
import queryClient from '../../../globals/Providers/queryClient';
import fetchGetRoles from '../../../../utils/api/fetchGetRoles';
import AuthorizationContext from '../../../../context/AuthorizationContext/AuthorizationContext';
import clearIfResponseError from '../../../../utils/clearIfResponseError';

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
  const onChange = clearIfResponseError(errors, clearErrors);
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
  let unauthorized;

  /**
   * client side barrier to stop updating other users's role with the same
   * role as the current user.
   */
  if (isAdminAction && isAuthorized) {
    userToUpdate = users.filter(
      (user) => user.id === userIds[0]
    )[0] as UserObject;
    currentUserIsAdmin = typesafeCurrentUser?.role === `admin`;
    unauthorized = !currentUserIsAdmin && userToUpdate?.role === `admin`;
    console.log({ userToUpdate });

    const restOfRoles = roles?.filter(
      (otherRole) => otherRole !== userToUpdate?.role
    ) as Roles;

    if (unauthorized) {
      selectOptions = [userToUpdate?.role];
    } else {
      selectOptions = restOfRoles && [userToUpdate?.role, ...restOfRoles];
    }

    email = userToUpdate?.email;
    firstName = userToUpdate?.firstName;
    lastName = userToUpdate?.lastName;
  }
  const ConditionalWrapper = unauthorized ? Box : Fragment;
  const conditionalProps = unauthorized
    ? {
        cursor: `not-allowed`,
        title: `Only admins may update other admins.`,
      }
    : undefined;

  return (
    <ConditionalWrapper {...conditionalProps}>
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
        isDisabled={unauthorized}
        pointerEvents={unauthorized ? `none` : undefined}
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
        isDisabled={unauthorized}
        pointerEvents={unauthorized ? `none` : undefined}
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
        isDisabled={unauthorized}
        pointerEvents={unauthorized ? `none` : undefined}
        {...props}
      />
      {isAdminAction && (
        <FormField
          pointerEvents={unauthorized ? `none` : undefined}
          isDisabled={unauthorized}
          isSelectField
          selectOptions={selectOptions}
          labelTitle={`Role:`}
          name={`role`}
          errors={errors}
          register={register}
          type={`text`}
          maxLength={35}
          icon={FaSignature}
          selectProps={{
            textTransform: `capitalize`,
          }}
          optionsProps={{ textTransform: `capitalize` }}
          inputProps={{
            defaultValue: lastName,
            textTransform: `capitalize`,
          }}
          {...props}
        />
      )}
    </ConditionalWrapper>
  );
};

export default UpdateProfileFormFields;
