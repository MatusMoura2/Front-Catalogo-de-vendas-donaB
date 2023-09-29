import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IProduct } from '../shared/interfaces/IProduct';
import { getProductById } from '../shared/services/products/get.service';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const fetchProductById = () => {
    getProductById(id || '').then(res => {
      console.log(res);
      setProduct(res.data);
    });
  };

  useEffect(() => {
    fetchProductById();
  }, []);

  return (
    <>
      <h1>Product</h1>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.image}</p>
    </>
  );
}
