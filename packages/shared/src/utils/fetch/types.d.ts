import { AxiosResponse } from 'axios';
import { Data, Endpoint, RequestMethod } from '@my-template/shared';

type FetchFunction = (
  method: RequestMethod,
  url?: string,
  endpoint: Endpoint,
  data?: Data,
  params?: string
) => Promise<AxiosResponse<Data | unknown>>;

export { FetchFunction };
