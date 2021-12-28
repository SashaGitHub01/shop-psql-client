import React, { useEffect } from "react";
import BrandsList from "../../components/Home/BrandsList/BrandsList";
import ProductsList from "../../components/ProductsList/ProductsList";
import PageHead from "../../components/PageHead/PageHead";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchTrands } from "../../store/actionCreators/trandsAC";
import s from './Home.module.scss';

const Home: React.FC = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchTrands());
   }, [])

   const { trands, isLoading } = useTypedSelector(state => state.trands)

   return (
      <div className={s.home}>
         <PageHead title="Главная" back={false} />
         <div className={s.home_col}>
            <BrandsList />
            <div className={s.trands}>
               <div className={s.trands_title}>
                  <span>Популярные товары</span>
               </div>
               <ProductsList
                  items={trands}
                  isLoading={isLoading}
               />
            </div>
         </div>
      </div>
   )
}

export default Home;
