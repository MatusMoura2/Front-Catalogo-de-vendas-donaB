import api from '..';

export const deleteProduct = async (id: string) =>
  await api.delete(`/product/${id}`);
