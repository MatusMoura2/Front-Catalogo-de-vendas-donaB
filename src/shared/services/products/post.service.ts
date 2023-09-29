import api from '..';
import { IProduct } from '../../interfaces/IProduct';

export const createProduct = async (product: IProduct) =>
  await api.post('/product', product);
