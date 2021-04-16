import { AxiosResponse } from 'axios';
import { Data, Endpoint, RequestMethod } from '@my-template/shared';

type AxiosRequest = (
  method: RequestMethod,
  url?: string,
  endpoint: Endpoint,
  data?: Data,
  params?: string,
  authorization?: string
) => Promise<AxiosResponse<Data | unknown>>;

export { AxiosRequest };
