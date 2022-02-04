import RequestError from '../errors/RequestError';

type HttpRequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// TODO: find way to avoid any

const request = async (requestType: HttpRequestType, url: string, data?: any) => {
  const response = await fetch(url, {
    method: requestType,
    headers: data && {
      'Content-Type': 'application/json',
    },
    body: data && JSON.stringify(data),
  });
  if (!response.ok) {
    throw new RequestError(response.status);
  }
  return response.json();
};

export const get = (url: string) => request('GET', url);
export const put = (url: string, data?: any) => request('PUT', url, data);
export const post = (url: string, data?: any) => request('POST', url, data);
export const remove = (url: string) => request('DELETE', url);

export default {
  get,
  post,
  put,
};

/*
import api from 'fetchHelper';
api.get<ProductDTO>(url);
*/
