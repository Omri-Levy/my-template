type ObjectKey = string | number | symbol;
type Data<T> = Record<ObjectKey, T>;
type Endpoint = `signUp` | `signIn` | `signOut` | `getUser`;
type RequestMethod = `GET` | `POST` | `PATCH` | `DELETE`;
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
type IterableUser = { [key: string]: User } | null;

export { ObjectKey, Data, Endpoint, RequestMethod, User, IterableUser };
