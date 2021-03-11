import { Router } from 'express';
import signUp from '../controllers/authentication/signUp';
import users from './users';
import signIn from '../controllers/authentication/signIn';
import validateRecaptcha from '../middleware/validateRecaptcha';
import signOut from '../controllers/authentication/signOut';
import bruteForce from '../expressBrute';

const authentication = Router();

/**
 * @swagger
 *
 * /api/signUp:
 *   post:
 *    summary: Insert a single new user into the database.
 *    tags: [Users]
 *    requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/User'
 *    responses:
 *     200:
 *      description: The users was created successfully.
 *     400:
 *      description: The user already exists.
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         example:
 *          message: User already exists.
 *     500:
 *      $ref: '#/components/responses/ServerError'
 */
users.post(`/signUp`, validateRecaptcha, signUp);

users.post(`/signIn`, bruteForce.prevent, validateRecaptcha, signIn);

users.post(`/signOut`, signOut);

export default authentication;
