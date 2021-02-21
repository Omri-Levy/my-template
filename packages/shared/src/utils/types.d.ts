type ObjectKey = string | number | symbol;
type Data = Record<ObjectKey, unknown>;
type Endpoint = `signUp` | `signIn` | `signOut` | `getUser`;
type RequestMethod = `GET` | `POST` | `PATCH` | `DELETE`;

export { ObjectKey, Data, Endpoint, RequestMethod };
