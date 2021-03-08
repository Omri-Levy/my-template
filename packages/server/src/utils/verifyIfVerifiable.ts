import { verify } from 'argon2';
import { VerifyIfVerifiable } from './types';

const verifyIfVerifiable: VerifyIfVerifiable = (user) => async (
  toVerifyAgainst,
  toVerify
) => {
  if (typeof toVerifyAgainst !== `string` || typeof toVerify !== `string`) {
    return null;
  }

  return user ? await verify(toVerifyAgainst, toVerify) : null;
};

export default verifyIfVerifiable;
