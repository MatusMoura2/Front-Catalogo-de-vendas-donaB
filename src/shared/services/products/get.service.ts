import api from '..';

export const getAllProducts = async () => await api.get('/product');
