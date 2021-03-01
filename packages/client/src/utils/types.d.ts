import { Dispatch, FunctionComponent, ReactNode, SetStateAction } from 'react';

type SetState<T> = Dispatch<SetStateAction<T>>;
type GRecaptchaResponse = string | null;
type Children = ReactNode | ReactNode[];
type Icon = FunctionComponent;

interface ChildrenProps {
  children: Children;
}

export { SetState, GRecaptchaResponse, Children, Icon, ChildrenProps };
