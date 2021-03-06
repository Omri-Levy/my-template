import { FieldErrors, useForm } from 'react-hook-form';
import { BoxProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { useStateMachine } from 'little-state-machine';
import { useHistory } from 'react-router-dom';
import { MouseEventHandler } from 'react';
import { Children, GetValues } from '../../../utils/types';
import { OnSubmit } from '../../../hooks/useAuthentication/types';
import { Breadcrumbs } from '../../Breadcrumbs/types';

interface Props extends BoxProps {
  breadcrumbs: Breadcrumbs;
  isFirstForm?: boolean;
  errors: FieldErrors;
  getValues: GetValues;
  nextFormPath?: string;
  handleSubmit: typeof useForm.handleSubmit;
  onSubmit?: OnSubmit;
  isSubmitting: boolean;
  submitButtonText?: string;
  icons?: boolean;
  submitButtonIcon?: IconType;
  children: Children;
}

type Actions = typeof useStateMachine.actions;
type NextFormPath = string | undefined;

type PreviousForm = (
  actions: Actions,
  getValues: GetValues,
  goBack: typeof useHistory.goBack
) => MouseEventHandler<HTMLButtonElement> | undefined;
type NextForm = (
  actions: Actions,
  getValues: GetValues,
  nextFormPath: NextFormPath,
  push: typeof useHistory.push
) => void;

export { Props, PreviousForm, NextForm };
