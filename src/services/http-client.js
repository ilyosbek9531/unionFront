import axios from "axios";
import { QueryClient } from "react-query";

const token = typeof window !== "undefined" && localStorage.getItem("token");

export const requestUnion = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_UNION,

  params: {},
  headers: {
    Authorization: token,
  },
});

export const requestUnionAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_UNION,
  params: {},
  headers: {},
});

const errorHandler = (error) => {
  // store.dispatch(showAlert(error?.message, "error"));
  return Promise.reject(error.response);
};

requestUnion.interceptors.response.use(
  (response) => response.data,
  errorHandler
);
requestUnionAuth.interceptors.response.use(
  (response) => response.data,
  errorHandler
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
