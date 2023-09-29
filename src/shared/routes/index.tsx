import { Route, Routes as CreatedRoutes } from 'react-router-dom';
import Home from '../../pages/Home';

export default function Routes() {
  return (
    <CreatedRoutes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </CreatedRoutes>
  );
}
