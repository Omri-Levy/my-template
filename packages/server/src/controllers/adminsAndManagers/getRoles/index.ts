import { roles as allRoles, UserObject } from '@my-template/shared';
import { Route } from '../../../utils/types';

const getRoles: Route = async (req, res) => {
  try {
    const user = req.user as UserObject;
    let roles = allRoles;

    if (user?.role !== `admin`) {
      roles = allRoles.filter((role) => role !== `admin`);
    }

    res.status(200).send({ status: `success`, roles });
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

export default getRoles;
