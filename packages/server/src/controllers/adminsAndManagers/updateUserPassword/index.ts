import {
  invalidUserIdMessage,
  isUuidV4,
  noChangesWereMadeMessage,
  noUserWasFoundMessage,
  unauthorizedMessage,
  updateUserPasswordSchema,
  UserObject,
} from '@my-template/shared';
import { hash } from 'argon2';
import { v4 } from 'uuid';
import { Route } from '../../../utils/types';
import User from '../../../models/User.model';
import verifyIfVerifiable from '../../../utils/verifyIfVerifiable';
import refreshUsersCache from '../../../utils/usersCache/refreshUsersCache';

const updateUserPassword: Route = async (req, res) => {
  try {
    const { userId } = req?.params;
    const user = req?.user as UserObject;

    if (!isUuidV4.test(userId)) {
      const message = invalidUserIdMessage;

      console.error(message);

      res?.status(400)?.send({ message });
    }

    await updateUserPasswordSchema.validate(req?.body);

    const userToUpdate = await User.findOne({
      where: { id: userId },
      attributes: [`id`, `password`],
    });

    if (!userToUpdate) {
      const message = noUserWasFoundMessage;

      console.error(message);

      res?.status(404)?.send({ message });
    }

    const verify = verifyIfVerifiable(userToUpdate);
    const { newPassword } = req?.body;
    const unchangedPassword = await verify(userToUpdate?.password, newPassword);

    if (unchangedPassword) {
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

    const hashedPassword = await hash(newPassword);

    await userToUpdate?.update({
      password: hashedPassword,
      tokenVersion: v4(),
    });

    console.log(`user password updated successfully`);

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

export default updateUserPassword;
