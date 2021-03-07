import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';
import Form from '../Form';
import { Breadcrumbs } from '../MultiStepForm/Breadcrumbs/types';

type ComponentType = FunctionComponent<{
  breadcrumbs: Breadcrumbs;
  isFirstForm?: boolean;
  nextFormPath?: string | undefined;
}>;

interface Form {
  to: string;
  Component: ComponentType;
  text: string;
  icon?: IconType;
}

type Forms = Form[];

interface Props {
  forms: Forms;
}

type GenerateFormStep = (
  to: string,
  Component: ComponentType,
  text: string,
  icon?: IconType
) => Form;

export { Props, Form, Forms, GenerateFormStep };
