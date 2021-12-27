import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductsList from "../../components/Home/ProductsList/ProductsList";
import PageHead from "../../components/PageHead/PageHead";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProducts } from "../../store/actionCreators/catalogAC";
import s from './Catalog.module.scss';

const Catalog = () => {
   const { isLoading, products, error } = useTypedSelector(state => state.catalog);
   const dispatch = useAppDispatch();
   const loc = useLocation();

   useEffect(() => {
      const typeId = new URLSearchParams(loc.search).get('typeId');
      const brandId = new URLSearchParams(loc.search).get('brandId');
      const page = new URLSearchParams(loc.search).get('page');

      const query = {
         page,
         brandId,
         typeId
      }

      dispatch(fetchProducts(query))
   }, [loc, dispatch])

   return (
      <div className={s.catalog}>
         <PageHead title="Каталог" back={true} />
         <div className={s.catalog_col}>
            <ProductsList
               items={products.rows}
               isLoading={isLoading}
            />
         </div>
      </div>
   )
}

export default Catalog
