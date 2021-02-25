import { Router } from 'express';
import { authenticate } from 'passport';
import getUsers from '../controllers/users/getUsers';
import getUser from '../controllers/users/getUser';

const users = Router();

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
 *          role: admin
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
users.get(`/getUsers`, getUsers);

users.get(
  `/getUser`,
  authenticate(`jwt`, {
    session: false,
  }),
  getUser
);

export default users;
