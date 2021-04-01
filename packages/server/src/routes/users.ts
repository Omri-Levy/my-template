import { Router } from 'express';
import { authenticate } from 'passport';
import forgotPassword from '../controllers/users/forgotPassword';
import resetPassword from '../controllers/users/resetPassword';
import validateResetPasswordToken from '../middleware/validateResetPasswordToken';
import validateResetPasswordTokenController from '../controllers/users/validateResetPasswordToken';
import terminateUserAccount from '../controllers/users/terminateUserAccount';
import updateProfile from '../controllers/users/updateProfile';
import updatePassword from '../controllers/users/updatePassword';

const users = Router();

users.post(`/forgotPassword`, forgotPassword);

users.post(`/resetPassword/:token`, validateResetPasswordToken, resetPassword);

users.get(
  `/validateResetPasswordToken/:token`,
  validateResetPasswordToken,
  validateResetPasswordTokenController
);

users.delete(
  `/terminateUserAccount`,
  authenticate(`jwt`, {
    session: false,
  }),
  terminateUserAccount
);

users.post(
  `/updateProfile`,
  authenticate(`jwt`, {
    session: false,
  }),
  updateProfile
);

users.post(
  `/updatePassword`,
  authenticate(`jwt`, {
    session: false,
  }),
  updatePassword
);

export default users;
