import User from '../../../models/User.model';
import { Route } from '../../../utils/types';

const deleteUser: Route = async (req, res) => {
  try {
    const { userIds } = req.body;

    await User.destroy({ where: { id: userIds } });

    res.status(200).send({ status: `success` });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error });
  }
};

export default deleteUser;
