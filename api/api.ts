import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:5173',
  headers: {
    Accept: "*/*",
  },
  timeoutErrorMessage: "Connection Timeout",
  timeout: 1000 * 60,
});

api.interceptors.request.use(async (config) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalizedError = {
      isAxiosError: true,
      message: error.message,
      response: {
        status: error.response?.status ?? error.code,
        data: error.response?.data,
      },
    };
    throw normalizedError;
  },
);
 