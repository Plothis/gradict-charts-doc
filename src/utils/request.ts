import Axios, { AxiosRequestConfig } from 'axios';
import isObjectLike from 'lodash/isObjectLike';
import { notification } from 'antd';
import { apiPrefix } from '../constants/api';

export interface Config extends AxiosRequestConfig {
  errorTip?: string;
}
export interface ResponseData<T = any> {
    code: number;
    isSuccess: boolean;
    message: string;
    data: T;
    requestId: string;
  }
  
export const rootPath = apiPrefix;

export const http = Axios.create({
  baseURL: rootPath,
  timeout: 300000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});


export const request = async function<T = any>(config: Config) {
  const tip = config.errorTip || 'Network Error!';
  try {
    const result = await http.request<ResponseData<T>>(config);

    if (
      result &&
      result.status >= 200 &&
      result.status < 300 &&
      isObjectLike(result.data)
    ) {
      return result.data;
    }
    const error = {
      tip,
      response: result,
      url: config.url,
    };
    notification.error({
      message: `Request Error ${config.url}`,
      description: error.tip,
    });
    throw error;
  } catch (error) {
    notification.error({
      message: `Request Error ${error.message}`,
      description: error.tip,
    });
    throw error;
  }
};
export default request;

/**
 * @param requestResult
 */
export function checkResult<T>(requestResult: Promise<ResponseData<T>>) {
  return requestResult.then(data => {
    if (data.code !== 0 && data.message) {
      notification.error({
        message: `Error: ${data.code}`,
        description: data.message,
      });
      throw Error(data.message);
    }
    return data;
  });
}
