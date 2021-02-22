type ObjectKey = string | number | symbol;
type Data = Record<ObjectKey, unknown>;
type Endpoint = `signUp` | `signIn` | `signOut` | `getUser`;
type RequestMethod = `GET` | `POST` | `PATCH` | `DELETE`;
interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
}
type IterableUser = {[key: string]: User};

export { ObjectKey, Data, Endpoint, RequestMethod, User, IterableUser };
