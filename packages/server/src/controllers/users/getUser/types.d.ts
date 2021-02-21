import { Response } from 'express';
import User from '../../../models/User.model';

interface GetUserRequest extends Response {
  user: User;
}

export default GetUserRequest;
