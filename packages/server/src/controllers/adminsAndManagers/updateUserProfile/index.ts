import {
  formValuesChanged,
  invalidUserIdMessage,
  isUuidV4,
  lowerCaseComparison,
  noChangesWereMadeMessage,
  noUserWasFoundMessage,
  ObjectKey,
  terminateUserAccountMessage,
  unauthorizedMessage,
  updateUserProfileSchema,
  UserObject,
} from '@my-template/shared';
import { Route } from '../../../utils/types';
import User from '../../../models/User.model';
import emailIsAlreadyInUse from '../../../utils/emailIsAlreadyInUse';
import refreshUsersCache from '../../../utils/usersCache/refreshUsersCache';
import isCountOneInUsers from '../../../utils/isCountOneInUsers';

const updateUserProfile: Route = async (req, res) => {
  try {
    const { userId } = req?.params;
    const user = req?.user as UserObject;

    if (!isUuidV4.test(userId)) {
      const message = invalidUserIdMessage;

      console.error(message);

      res?.status(400)?.send({ message });
    }

    await updateUserProfileSchema.validate(req?.body);

    const userToUpdate = await User.findOne({
      attributes: [`id`, `email`, `firstName`, `lastName`, `role`],
      where: { id: userId },
    });

    if (!userToUpdate) {
      const message = noUserWasFoundMessage;
      console.error(message);

      res?.status(404)?.send({ message });
    }

    const { email, fname: firstName, lname: lastName, role } = req?.body;
    const currentValues = {
      email: userToUpdate?.email,
      firstName: userToUpdate?.firstName,
      lastName: userToUpdate?.lastName,
      role: userToUpdate?.role,
    } as Record<ObjectKey, string>;
    const newValues = {
      email,
      firstName,
      lastName,
      role: role?.toLowerCase(),
    };
    const unchangedValues = formValuesChanged(
      currentValues,
      undefined,
      newValues
    );
    const unchangedRole = lowerCaseComparison(userToUpdate?.role, role);

    if (unchangedValues) {
      console.error(noChangesWereMadeMessage);

      res?.status(400)?.send({ message: noChangesWereMadeMessage });

      return;
    }

    /**
     * making sure only admins can update everyone and no one can update them.
     */
    const currentUserIsAdmin = user?.role === `admin`;

    if (!currentUserIsAdmin && userToUpdate?.role === `admin`) {
      console.error(unauthorizedMessage);

      res?.status(401)?.send({ message: unauthorizedMessage });

      return;
    }

    const isOnlyAdmin = await isCountOneInUsers(`role`, `admin`);

    if (
      isOnlyAdmin &&
      userToUpdate?.role === `admin` &&
      role &&
      !unchangedRole
    ) {
      console.error(terminateUserAccountMessage);

      res?.status(400)?.send({ message: terminateUserAccountMessage });

      return;
    }

    const emailAlreadyInUse = await emailIsAlreadyInUse(
      email,
      res,
      userToUpdate as UserObject
    );

    if (emailAlreadyInUse) {
      return;
    }

    await userToUpdate?.update({
      email: email || userToUpdate?.email,
      firstName: firstName || userToUpdate?.firstName,
      lastName: lastName || userToUpdate?.lastName,
      role: role || userToUpdate?.role,
    });

    await refreshUsersCache();

    res?.status(200)?.send({ status: `success` });
  } catch (error) {
    const { name, errors } = error;

    if (name === `ValidationError`) {
      console.error(errors);

      res?.status(400)?.send({ message: errors });

      return;
    }

    console.error(error);

    res?.status(500)?.send({ error });
  }
};

export default updateUserProfile;
