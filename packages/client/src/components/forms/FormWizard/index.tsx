import { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';
import { Props } from './types';
import { Breadcrumbs } from '../../Breadcrumbs/types';

const FormWizard: FunctionComponent<Props> = ({ forms }) => {
  const { pathname } = useLocation();
  let breadcrumbs: Breadcrumbs = [];

  forms.forEach((form) => {
    const { to, text } = form;

    breadcrumbs = [...breadcrumbs, { to, text }];
  });

  return (
    <>
      {forms.map((form, index) => {
        const { to, Component } = form;
        const isLastForm = index === forms.length + 1;
        const isFirstForm = index === 0;
        const nextFormPath = !isLastForm ? forms[index + 1]?.to : undefined;

        if (pathname !== to) {
          return null;
        }

        breadcrumbs.forEach((breadcrumb, idx) => {
          if (breadcrumb.to === to) {
            breadcrumbs[idx] = {
              ...breadcrumb,
              isCurrentPage: true,
            };
          }
        });

        return (
          <Component
            breadcrumbs={breadcrumbs}
            key={to}
            isFirstForm={isFirstForm}
            nextFormPath={nextFormPath}
          />
        );
      })}
    </>
  );
};

export default FormWizard;
