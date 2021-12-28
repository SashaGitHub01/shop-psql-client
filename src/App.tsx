import React, { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Loader from './UI/Loader/Loader';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import { useDispatch } from 'react-redux';
import { fetchBrands } from './store/actionCreators/brandsAC';
import Product from './pages/Product/Product';
import { fetchAuth } from './store/actionCreators/userAC';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
   const dispatch = useDispatch();

   const isLoading = useTypedSelector(state => state.user.isLoading);

   useEffect(() => {
      dispatch(fetchAuth());
      dispatch(fetchBrands());
   }, [])

   return (
      <>
         {isLoading
            ? <Loader />
            : <Layout>
               <Routes>
                  <Route path={'/'} element={<Home />} />
                  <Route path={'/catalog'} element={<Catalog />} />
                  <Route path={'/product/:id'} element={<Product />} />
               </Routes>
            </Layout>}
      </>
   );
}

export default App;
