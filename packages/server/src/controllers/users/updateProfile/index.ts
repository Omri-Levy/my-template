import {
  formValuesChanged,
  noChangesWereMadeMessage,
  noUserWasFoundMessage,
  ObjectKey,
  updateProfileSchema,
  UserObject
} from '@my-template/shared';
import { Route } from '../../../utils/types';
import User from '../../../models/User.model';
import emailIsAlreadyInUse from '../../../utils/emailIsAlreadyInUse';
import setCurrentUserCache
  from '../../../utils/currentUserCache/setCurrentUserCache';

const updateProfile: Route = async (req, res) => {
  try {
    const user = req.user as UserObject;
    const { id } = user;
    await updateProfileSchema.validate(req?.body);

    const userToUpdate = await User.findOne({ where: { id } });

    if (!userToUpdate) {
      const message = noUserWasFoundMessage;
      console.error(message);

      res.status(404).send({ message });
    }

    const { email, fname: firstName, lname: lastName } = req?.body;
    const currentValues = {
      email: userToUpdate?.email,
      firstName: userToUpdate?.firstName,
      lastName: userToUpdate?.lastName,
    } as Record<ObjectKey, string>;
    const newValues = {
      email,
      firstName,
      lastName,
    };
    const unchangedValues = formValuesChanged(
      currentValues,
      undefined,
      newValues
    );

    if (unchangedValues) {
      console.error(noChangesWereMadeMessage);

      res.status(400).send({ message: noChangesWereMadeMessage });

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
    });

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

export default updateProfile;
