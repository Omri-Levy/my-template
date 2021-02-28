import providersDecorator from './decorators/providersDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [providersDecorator];
