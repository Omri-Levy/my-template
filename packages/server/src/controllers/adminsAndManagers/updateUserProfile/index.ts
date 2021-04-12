import {
  invalidUserIdMessage,
  isUuidV4,
  lowerCaseComparison,
  noChangesWereMadeMessage,
  noUserWasFoundMessage,
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
    const { userId } = req.params;
    const user = req?.user as UserObject;

    if (!isUuidV4.test(userId)) {
      const message = invalidUserIdMessage;

      console.error(message);

      res.status(400).send({ message });
    }

    await updateUserProfileSchema.validate(req?.body);

    const userToUpdate = await User.findOne({
      attributes: [`id`, `email`, `firstName`, `lastName`, `role`],
      where: { id: userId },
    });

    if (!userToUpdate) {
      const message = noUserWasFoundMessage;
      console.error(message);

      res.status(404).send({ message });
    }

    const { email, fname: firstName, lname: lastName, role } = req?.body;
    const unchangedEmail = userToUpdate?.email === email;
    const unchangedFirstName = userToUpdate?.firstName === firstName;
    const unchangedLastName = userToUpdate?.lastName === lastName;
    const unchangedRole = lowerCaseComparison(userToUpdate?.role, role);

    if (
      unchangedEmail &&
      unchangedFirstName &&
      unchangedLastName &&
      unchangedRole
    ) {
      console.error(noChangesWereMadeMessage);

      res.status(400).send({ message: noChangesWereMadeMessage });

      return;
    }

    /**
     * making sure only admins can update everyone and no one can update them.
     */
    const currentUserIsAdmin = user?.role === `admin`;

    if (!currentUserIsAdmin && role && !unchangedRole) {
      console.error(unauthorizedMessage);

      res.status(401).send({ message: unauthorizedMessage });

      return;
    }

    const isOnlyAdmin = await isCountOneInUsers(`role`, `admin`);

    if (isOnlyAdmin && userToUpdate?.role === `admin` && !unchangedRole) {
      console.error(terminateUserAccountMessage);

      res.status(400).send({ message: terminateUserAccountMessage });

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

    res.status(200).send({ status: `success` });
  } catch (error) {
    const { name, errors } = error;

    if (name === `ValidationError`) {
      console.error(errors);

      res.status(400).send({ message: errors });

      return;
    }

    console.error(error);

    res.status(500).send({ error });
  }
};

export default updateUserProfile;
