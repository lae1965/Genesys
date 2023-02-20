import { HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

let accessToken: string;
export const $api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const requestCRMInit = async () => {
  try {
    const response = await axios.get(process.env.GET_ACCESS_URL, {
      headers: {
        'Content-Type': 'application/json',
        'X-Client-Id': process.env.ACCESS_KEY,
      },
    });
    if (!response || response.status >= 400)
      throw new HttpException('Неправильный запрос', HttpStatus.BAD_REQUEST);
    accessToken = response.data.access_token;
    $api.defaults.baseURL = `https://${response.data.base_domain}/api/v4/`;
  } catch (e) {
    throw e;
  }
};

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === HttpStatus.UNAUTHORIZED &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await requestCRMInit();
        return await $api.request(originalRequest);
      } catch {
        throw new HttpException(
          'Пользователь не авторизован',
          HttpStatus.UNAUTHORIZED,
        );
      }
    }
    throw error;
  },
);
