import { Dispatch, SetStateAction } from 'react';

type SetState<T> = Dispatch<SetStateAction<T>>;
type GRecaptchaResponse = string | null;

export { SetState, GRecaptchaResponse };
