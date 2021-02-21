import { Dispatch, SetStateAction } from 'react';

interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
}
type SetState<T> = Dispatch<SetStateAction<T>>
type GRecaptchaResponse = string | null;

export {User, SetState, GRecaptchaResponse};
