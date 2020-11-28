import axios from "axios";
import { requestHandler, successHandler, errorHandler } from "./interceptor";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
