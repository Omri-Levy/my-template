import {
  emailAlreadyInUseMessage,
  invalidUserIdMessage,
  noChangesWereMadeMessage,
  noUserWasFoundMessage,
  updateProfileSchema,
} from '@my-template/shared';
import { Route } from '../../../utils/types';
import User from '../../../models/User.model';

const updateUserProfile: Route = async (req, res) => {
  try {
    const { userId } = req.body;

    if (typeof userId !== `string`) {
      const message = invalidUserIdMessage;

      console.error(message);

      res.status(400).send({ message });
    }

    const { email, fname: firstName, lname: lastName } = req.body;

    await updateProfileSchema.validate(req.body);

    const userToUpdate = await User.findOne({ where: { id: userId } });

    if (!userToUpdate) {
      const message = noUserWasFoundMessage;

      console.error(message);

      res.status(404).send({ message });
    }

    const unchangedEmail = userToUpdate?.email === email;
    const unchangedFirstName = userToUpdate?.firstName === firstName;
    const unchangedLastName = userToUpdate?.lastName === lastName;

    if (unchangedEmail && unchangedFirstName && unchangedLastName) {
      console.error(noChangesWereMadeMessage);

      res.status(400).send({ message: noChangesWereMadeMessage });

      return;
    }

    let emailAlreadyInUse = false;

    if (email) {
      emailAlreadyInUse = (await User.count({ where: { email } })) === 1;
    }

    if (emailAlreadyInUse && userToUpdate?.email !== email) {
      console.error(emailAlreadyInUseMessage);

      res.status(400).send({ message: emailAlreadyInUseMessage });

      return;
    }

    await userToUpdate?.update({
      email: email || userToUpdate.email,
      firstName: firstName || userToUpdate.firstName,
      lastName: lastName || userToUpdate.lastName,
    });

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
