import {
  invalidSecurityInformationMessage,
  noUserWasFoundMessage,
  resetPasswordSchema,
} from '@my-template/shared';
import { hash } from 'argon2';
import { v4 } from 'uuid';
import { Route } from '../../../utils/types';
import verifyIfVerifiable from '../../../utils/verifyIfVerifiable';

const resetPassword: Route = async (req, res) => {
  try {
    const { user } = res.locals;

    if (!user) {
      const message = noUserWasFoundMessage;

      console.error(message);

      res.status(404).send({ message });
    }

    await resetPasswordSchema.validate(req.body);

    const verify = verifyIfVerifiable(user);
    const { securityQuestion, securityAnswer, newPassword } = req.body;
    const securityQuestionMatches = await verify(
      user?.securityQuestion,
      securityQuestion
    );
    const securityAnswerMatches = await verify(
      user?.securityAnswer,
      securityAnswer
    );

    if (!securityQuestionMatches || !securityAnswerMatches) {
      console.error(invalidSecurityInformationMessage);

      res.status(400).send({ message: invalidSecurityInformationMessage });

      return;
    }

    const hashedPassword = await hash(newPassword);

    await user?.update({ password: hashedPassword, tokenVersion: v4() });

    console.log(`user password reset successfully`);

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

export default resetPassword;
