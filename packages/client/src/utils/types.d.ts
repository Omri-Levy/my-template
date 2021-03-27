import { Dispatch, FunctionComponent, ReactNode, SetStateAction } from 'react';
import { IconType } from 'react-icons';
import { useForm } from 'react-hook-form';
import { SignUpFormFields } from '../components/pages/SignUp/types';
import { SignUp } from '../hooks/api/useSignUp/types';
import { SignIn } from '../hooks/api/useSignIn/types';
import { UpdateProfile } from '../components/pages/Profile/types';

type SetState<T> = Dispatch<SetStateAction<T>>;
type GRecaptchaResponse = string | null | `empty`;
type Children = ReactNode | ReactNode[];
type Icon = FunctionComponent;
type Register = typeof useForm.register;
type SetError = typeof useForm.setError;
type ClearErrors = typeof useForm.clearErrors;
type GetValues = typeof useForm.getValues;
type HandleSubmit = typeof useForm.handleSubmit;

type IconProps = IconType;

interface ChildrenProps {
  children: Children;
}

type Payload = SignUpFormFields | Record<null, null>;
type Callback = (args?: unknown) => Promise<unknown>;
type AsyncUseEffect = (callback: Callback) => Promise<unknown>;
type GenericArray<T> = T[];
type Generic<T> = T;
interface Disclosure {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
type FormSubmit = SignUp | SignIn | UpdateProfile;

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
  AsyncUseEffect,
  GenericArray,
  Generic,
  HandleSubmit,
  Disclosure,
  FormSubmit,
};
