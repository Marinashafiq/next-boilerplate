import { axiosInstance } from "../../network";

export const getProducts = async () => {
  return await axiosInstance.get(`URL`);
};
