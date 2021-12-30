import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ProductsList from "../../components/ProductsList/ProductsList";
import PageHead from "../../components/PageHead/PageHead";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProducts } from "../../store/actionCreators/catalogAC";
import s from './Catalog.module.scss';
import Paginator from "../../UI/Paginator/Paginator";

const Catalog = () => {
   const [page, setPage] = useState<number | null>(null);
   const [params, setParams] = useSearchParams(new URLSearchParams());

   const { isLoading, products, error } = useTypedSelector(state => state.catalog);

   const dispatch = useAppDispatch();
   const loc = useLocation();


   useEffect(() => {
      const page = new URLSearchParams(loc.search).get('page');

      setPage(page as unknown as number || 1)
   }, [loc])

   useEffect(() => {
      if (!page) return;

      const typeId = new URLSearchParams(loc.search).get('typeId');
      const brandId = new URLSearchParams(loc.search).get('brandId');

      const query = {
         page,
         brandId,
         typeId,
         limit: 3
      }

      dispatch(fetchProducts(query))
   }, [loc, dispatch, page])

   const handleClick = (e: any) => {
      const page = e.target.dataset.page;

      const obj = Object.fromEntries(new URLSearchParams(params))

      setParams({ ...obj, page });

      setPage(page as number);
   }


   return (
      <div className={s.catalog}>
         <PageHead title="Каталог" back={true} to="/" />
         <div className={s.catalog_col}>
            <ProductsList
               items={products.rows}
               isLoading={isLoading}
            />
            {products && page
               && <Paginator
                  current={page}
                  handleClick={handleClick}
                  count={products.count}
                  limit={3}
               />}
         </div>
      </div>
   )
}

export default Catalog
