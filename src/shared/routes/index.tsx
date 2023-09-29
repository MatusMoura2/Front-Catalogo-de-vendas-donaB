import { Route, Routes as CreatedRoutes } from 'react-router-dom';
import Home from '../../pages/Home';
import Product from '../../pages/Product.';

export default function Routes() {
  return (
    <CreatedRoutes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
      <Route path="product">
        <Route path=":id" element={<Product />} />
      </Route>
    </CreatedRoutes>
  );
}
