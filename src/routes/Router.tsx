import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Units from '../components/Units';
import UnitsDetails from '../components/UnitsDetails';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/units" element={<Units />}></Route>
      <Route path="/units-details/:id" element={<UnitsDetails />}></Route>
    </Routes>
    
  );
}

export default Router;
