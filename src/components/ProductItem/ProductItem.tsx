import React from "react";
import { Link } from "react-router-dom";
import { StarFillIcon, StarIcon } from "../../assets/icons";
import { IItem } from "../../types/IItem";
import s from './ProductItem.module.scss';

interface IProductItem {
   item: IItem
}

const ProductItem: React.FC<IProductItem> = ({ item }) => {
   return (
      <Link to={`/product/${item.id}`} className={s.item}>
         <div className={s.item_col}>
            <div
               className={s.item_img}
               style={{ backgroundImage: `url(${item.image})` }}
            >
            </div>
            <div className={s.info}>
               <div className={s.info_row}>
                  <div className={s.info_main}>
                     <div className={s.name}>
                        {item.name}
                     </div>
                     <div className={s.rating}>
                        <StarFillIcon className={s.star_icon} />
                        <span>
                           {item.rating}
                        </span>
                     </div>
                  </div>
                  <div className={s.info_price}>
                     <span>
                        {item.price}
                     </span>₽
                  </div>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default ProductItem
