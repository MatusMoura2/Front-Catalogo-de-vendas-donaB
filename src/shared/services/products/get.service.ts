import api from '..';

export const getAllProducts = async () => await api.get('/product');

export const getProductById = async (id: string) =>
  await api.get(`/product/${id}`);
