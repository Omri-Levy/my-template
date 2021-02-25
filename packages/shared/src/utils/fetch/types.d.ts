import { AxiosResponse } from 'axios';
import { Data, Endpoint, RequestMethod } from '@my-template/shared';

type FetchFunction = (
  method: RequestMethod,
  url?: string,
  endpoint: Endpoint,
  data?: Data
) => Promise<AxiosResponse<Data | unknown>>;

export { FetchFunction };
