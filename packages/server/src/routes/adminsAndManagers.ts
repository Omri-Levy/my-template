import { authenticate } from 'passport';
import { Router } from 'express';
import isAuthorized from '../middleware/isAuthorized';
import deleteSelectedUsers from '../controllers/adminsAndManagers/deleteSelectedUsers';
import deleteAllUsers from '../controllers/adminsAndManagers/deleteAllUsers';
import updateUserProfile from '../controllers/adminsAndManagers/updateUserProfile';
import getUsers from '../controllers/adminsAndManagers/getUsers';
import updateUserPassword from '../controllers/adminsAndManagers/updateUserPassword';
import getRoles from '../controllers/adminsAndManagers/getRoles';

const adminsAndManagers = Router();

/**
 * @swagger
 *
 * components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - email
 *          - password
 *        properties:
 *          id:
 *           type: string
 *           format: uuid
 *           description: The auto-generated id of the user.
 *          email:
 *            type: string
 *            format: email
 *            description: The email of the user.
 *          password:
 *            type: string
 *            description: The pre-salted and hashed password of the user.
 *          role:
 *            type: string
 *            description: The role of the user for authorization purposes.
 *        example:
 *          id: 5fcd854a-51cb-4577-9c3f-9e833337e192
 *          email: example@example.com
 *          password: Example@1
 *          role: adminsAndManagers.ts
 *    parameters:
 *      UserId:
 *       name: id
 *       in: path
 *       description: The auto-generated id of the user.
 *       schema:
 *         type: string
 *         format: uuid
 *       required: true
 *    responses:
 *      ServerError:
 *       description: Some server error.
 *       content:
 *        application/json:
 *         schema:
 *          type: object
 *          example:
 *           message: An error has occurred. Please try again later.
 * */

/**
 * @swagger
 *
 * tags:
 *  name: Users
 *  description: The users managing API.
 * */

/**
 * @swagger
 *
 * /api/getUsers:
 *   get:
 *     summary: Get an array of all the users.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The array of all the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: No users were found.
 *         content:
 *          application/json:
 *           schema:
 *            type: object
 *            example:
 *             message: No users were found.
 *       500:
 *         $ref: '#/components/responses/ServerError'
 *
 */
adminsAndManagers.get(
  `/getUsers`,
  authenticate(`jwt`, {
    session: false,
  }),
  isAuthorized([`admin`, `manager`]),
  getUsers
);

adminsAndManagers.delete(
  `/deleteSelectedUsers`,
  authenticate(`jwt`, {
    session: false,
  }),
  isAuthorized([`admin`, `manager`]),
  deleteSelectedUsers
);

adminsAndManagers.delete(
  `/deleteAllUsers`,
  authenticate(`jwt`, {
    session: false,
  }),
  isAuthorized([`admin`, `manager`]),
  deleteAllUsers
);

adminsAndManagers.post(
  `/updateUserProfile/:userId`,
  authenticate(`jwt`, {
    session: false,
  }),
  isAuthorized([`admin`, `manager`]),
  updateUserProfile
);

adminsAndManagers.post(
  `/updateUserPassword/:userId`,
  authenticate(`jwt`, {
    session: false,
  }),
  isAuthorized([`admin`, `manager`]),
  updateUserPassword
);

adminsAndManagers.get(
  `/getRoles`,
  authenticate(`jwt`, {
    session: false,
  }),
  isAuthorized([`admin`, `manager`]),
  getRoles
);

export default adminsAndManagers;
