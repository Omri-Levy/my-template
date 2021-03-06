import { FunctionComponent } from 'react';
import Form from '../Form';
import { Breadcrumbs } from '../../Breadcrumbs/types';

type ComponentType = FunctionComponent<{
  breadcrumbs: Breadcrumbs;
  isFirstForm?: boolean;
  nextFormPath?: string | undefined;
}>;

interface Form {
  to: string;
  Component: ComponentType;
  text: string;
}

type Forms = Form[];

interface Props {
  forms: Forms;
}

type GenerateFormStep = (
  to: string,
  Component: ComponentType,
  text: string
) => Form;

type GenerateForms = (...args) => Forms;

export { Props, GenerateFormStep, GenerateForms };
