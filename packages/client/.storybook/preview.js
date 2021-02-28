import ProvidersDecorator from './globalDecorators/ProvidersDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [ProvidersDecorator];
