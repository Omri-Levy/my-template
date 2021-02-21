import axios from 'axios';
import { FetchFunction } from './types';
import { apiUrl } from '../constants';

const fetch: FetchFunction = async (method, url, endpoint, data) => {
  try {
    return await axios({
      method,
      url: url || `${apiUrl}/${endpoint}`,
      withCredentials: true,
      data: data ?? data,
    });
  } catch (err) {
    console.error(err);

    return err;
  }
};

export default fetch;
