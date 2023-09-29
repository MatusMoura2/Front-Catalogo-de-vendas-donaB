import { Fragment, useEffect, useState } from 'react';
import { getAllProducts } from '../shared/services/products/get.service';
import { IProduct } from '../shared/interfaces/IProduct';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    getAllProducts().then(res => {
      setProducts(res.data);
    });
  };

  return (
    <div className="container">
      <h1>Catálogo</h1>
      <div className="card-grid">
        {products.map(product => (
          <Fragment key={product.id}>
            <Link to={`product/${product.id}`}>
              <img src={product.image} />
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
