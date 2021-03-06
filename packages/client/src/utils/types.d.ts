import { Dispatch, FunctionComponent, ReactNode, SetStateAction } from 'react';
import { IconType } from 'react-icons';
import { useForm } from 'react-hook-form';
import { SignUpFormFields } from '../components/pages/SignUp/types';

type SetState<T> = Dispatch<SetStateAction<T>>;
type GRecaptchaResponse = string | null | `empty`;
type Children = ReactNode | ReactNode[];
type Icon = FunctionComponent;
type Register = typeof useForm.register;
type SetError = typeof useForm.setError;
type ClearErrors = typeof useForm.clearErrors;
type GetValues = typeof useForm.getValues;

type IconProps = IconType;

interface ChildrenProps {
  children: Children;
}

type Payload = SignUpFormFields | Record<null, null>;

export {
  SetState,
  GRecaptchaResponse,
  Children,
  Icon,
  IconProps,
  ChildrenProps,
  Register,
  SetError,
  ClearErrors,
  GetValues,
  Payload,
};
