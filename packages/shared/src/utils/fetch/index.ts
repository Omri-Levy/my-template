import axios from 'axios';
import { FetchFunction } from './types';
import { apiUrl } from '../constants';

const fetch: FetchFunction = async (method, url, endpoint, data) =>
  await axios({
    method,
    url: url || `${apiUrl}/${endpoint}`,
    withCredentials: true,
    data: data ?? data,
  });

export default fetch;
