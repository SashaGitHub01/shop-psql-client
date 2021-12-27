import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Loader from './UI/Loader/Loader';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import { useDispatch } from 'react-redux';
import { fetchBrands } from './store/actionCreators/brandsAC';
import Product from './pages/Product/Product';

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchBrands())
   }, [])

   return (
      <Layout>
         <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/catalog'} element={<Catalog />} />
            <Route path={'/product/:id'} element={<Product />} />
         </Routes>
      </Layout>
   );
}

export default App;
