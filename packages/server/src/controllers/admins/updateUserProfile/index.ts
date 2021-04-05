import {
  invalidUserIdMessage,
  isUuidV4,
  lowerCaseComparison,
  noChangesWereMadeMessage,
  noUserWasFoundMessage,
  updateUserProfileSchema,
} from '@my-template/shared';
import { Route } from '../../../utils/types';
import User from '../../../models/User.model';
import emailIsAlreadyInUse from '../../../utils/emailIsAlreadyInUse';
import refreshUsersCache from '../../../utils/usersCache/refreshUsersCache';

const updateUserProfile: Route = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!isUuidV4.test(userId)) {
      const message = invalidUserIdMessage;

      console.error(message);

      res.status(400).send({ message });
    }

    const { email, fname: firstName, lname: lastName, role } = req.body;

    await updateUserProfileSchema.validate(req.body);

    const userToUpdate = await User.findOne({
      attributes: [`id`, `email`, `firstName`, `lastName`, `role`],
      where: { id: userId },
    });

    if (!userToUpdate) {
      const message = noUserWasFoundMessage;

      console.error(message);

      res.status(404).send({ message });
    }

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

    const emailAlreadyInUser = await emailIsAlreadyInUse(
      email,
      userToUpdate,
      res
    );

    if (emailAlreadyInUser) {
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
