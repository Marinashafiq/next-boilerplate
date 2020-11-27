import { axiosInstance } from "../../network";

export const getProducts = async () => {
  return await axiosInstance.get(`/products`);
};

export const getProductDetais = async (id) => {
  return await axiosInstance.get(`/products/${id}`);
};
