import {
  invalidOldPasswordMessage,
  noChangesWereMadeMessage,
  noUserWasFoundMessage,
  updatePasswordSchema,
  UserObject,
} from '@my-template/shared';
import { hash } from 'argon2';
import { v4 } from 'uuid';
import { Route } from '../../../utils/types';
import User from '../../../models/User.model';
import verifyIfVerifiable from '../../../utils/verifyIfVerifiable';
import setCurrentUserCache from '../../../utils/currentUserCache/setCurrentUserCache';

const updatePassword: Route = async (req, res) => {
  try {
    const { user } = req;
    const { id } = user as UserObject;
    const userToUpdate = await User.findOne({
      where: { id },
      attributes: [`id`, `password`],
    });

    if (!userToUpdate) {
      const message = noUserWasFoundMessage;

      console.error(message);

      res.status(404).send({ message });
    }

    await updatePasswordSchema.validate(req.body);

    const { oldPassword, newPassword } = req.body;
    const verify = verifyIfVerifiable(userToUpdate);
    const unchangedPassword = await verify(userToUpdate?.password, newPassword);
    const oldPasswordMatches = await verify(
      userToUpdate?.password,
      oldPassword
    );

    if (unchangedPassword) {
      console.error(noChangesWereMadeMessage);

      res.status(400).send({ message: noChangesWereMadeMessage });

      return;
    }

    if (!oldPasswordMatches) {
      console.error(invalidOldPasswordMessage);

      res.status(400).send({ message: invalidOldPasswordMessage });

      return;
    }

    const hashedPassword = await hash(newPassword);

    await userToUpdate?.update({
      password: hashedPassword,
      tokenVersion: v4(),
    });

    console.log(`user password updated successfully`);

    await setCurrentUserCache(userToUpdate);

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

export default updatePassword;
