import React, { useEffect } from "react";
import { IItem } from "../../../types/IItem";
import ProductItem from "../../ProductItem/ProductItem";
import s from './ProductsList.module.scss';

interface IProductsList {
   items: IItem[],
   isLoading: boolean
}

const ProductsList: React.FC<IProductsList> = ({ items, isLoading }) => {

   return (
      <div className={s.products}>
         <div className={s.products_list}>
            {
               items
                  ? items.map((item) => (
                     <ProductItem item={item} key={item.id} />
                  ))
                  : null
            }
         </div>
      </div>
   )
}

export default ProductsList
