import { Dispatch, ReactNode, SetStateAction } from 'react';

type SetState<T> = Dispatch<SetStateAction<T>>;
type GRecaptchaResponse = string | null;
type Children = ReactNode | ReactNode[];

export { SetState, GRecaptchaResponse, Children };
