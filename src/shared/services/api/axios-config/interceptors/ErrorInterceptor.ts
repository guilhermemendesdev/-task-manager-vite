import { AxiosError } from 'axios';

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === 'Netword Error') {
    return Promise.reject(new Error('Erro de conexão.'));
  }

  if (error.response?.status === 401) {
    // Do something
  }

  return Promise.reject(error);
};
