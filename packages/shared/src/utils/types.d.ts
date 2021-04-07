type ObjectKey = string | number | symbol;
type ObjectType = Record<ObjectKey, unknown>;
type Data<T> = Record<ObjectKey, T>;
type RequestMethod = `GET` | `POST` | `PATCH` | `DELETE`;
type Endpoint =
  | `signUp`
  | `signIn`
  | `signOut`
  | `authenticate`
  | `authorize`
  | `getUser`
  | `getUsers`
  | `deleteSelectedUsers`
  | `deleteAllUsers`
  | `terminateUserAccount`
  | `forgotPassword`
  | `resetPassword`
  | `validateResetPasswordToken`
  | `updateProfile`
  | `updateUserProfile`
  | `updatePassword`
  | `updateUserPassword`
  | `getRoles`;
type Role = `admin` | `manager` | `user`;
type Roles = Role[];

interface UserObject {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}
type User = UserObject | `unauthenticated` | null;
type UserKey = `id` | `firstName` | `lastName` | `email` | `role`;

type Users = UserObject[];

export {
  ObjectKey,
  ObjectType,
  Data,
  Endpoint,
  RequestMethod,
  UserObject,
  User,
  Users,
  UserKey,
  Role,
  Roles,
};
