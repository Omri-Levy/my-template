import axios from 'axios';
import { FetchFunction } from './types';
import { apiUrl } from '../constants';

const fetch: FetchFunction = async (method, url, endpoint, data, params) => {
  const conditionalUrl = url || `${apiUrl}/${endpoint}`;

  return axios({
    method,
    url: params ? `${conditionalUrl}/${params}` : conditionalUrl,
    withCredentials: true,
    data,
  });
};

export default fetch;
