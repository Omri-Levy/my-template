import { Router } from 'express';
import { authenticate } from 'passport';
import isAuthorized from '../middleware/isAuthorized';
import isAuthorizedController from '../controllers/authorization/isAuthorized';

const authorization = Router();

authorization.get(
  `/authorize`,
  authenticate(`jwt`, {
    session: false,
  }),
  isAuthorized([`admin`, `manager`]),
  isAuthorizedController
);

export default authorization;
