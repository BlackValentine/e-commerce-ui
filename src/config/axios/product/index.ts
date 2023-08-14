import axios from 'axios';
import { apiGET, apiPOST } from '..';
import { toast } from 'react-toastify';

export const getProductById = async (id: number) => {
  try {
    const data = await apiGET({
      url: `/product/${id}`,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data.errorMessage);
    }
  }
};

export const getAllProducts = async () => {
  try {
    const data = await apiGET({
      url: '/product',
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data.errorMessage);
    }
  }
};

export const createNewProduct = async (product: any) => {
  try {
    const data = await apiPOST({
      url: '/product',
      data: product,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response?.data.errorMessage);
    }
  }
};
