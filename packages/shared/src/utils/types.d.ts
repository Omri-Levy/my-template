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
  | `forgotPassword`
  | `resetPassword`
  | `validateResetPasswordToken`;

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

type IterableUser = { [key: string]: User } | `unauthenticated` | null;

export {
  ObjectKey,
  ObjectType,
  Data,
  Endpoint,
  RequestMethod,
  User,
  IterableUser,
};
