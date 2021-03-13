import axios from 'axios';
import { AxiosRequest } from './types';
import { apiUrl } from '../constants';

const axiosRequest: AxiosRequest = async (
  method,
  url,
  endpoint,
  data,
  params
) => {
  const conditionalUrl = url || `${apiUrl}/${endpoint}`;

  return axios({
    method,
    url: params ? `${conditionalUrl}/${params}` : conditionalUrl,
    withCredentials: true,
    data,
  });
};

export default axiosRequest;
