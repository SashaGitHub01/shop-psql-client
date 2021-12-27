import React from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import s from './BrandsList.module.scss';

const BrandsList: React.FC = () => {
   const { brands, isLoading } = useTypedSelector(state => state.brands)

   return (
      <div className={s.brands}>
         <div className={s.brands_list}>
            {isLoading
               ? <div className={s.brands_load}>loading</div>
               : brands
               && brands.map(({ name, image, id }) => (
                  <div className={s.brands_item} key={id}>
                     <Link
                        className={s.brands_col}
                        to={`/catalog?brandId=${id}`}
                     >
                        <div className={s.item_img}>
                           <img src={image} alt={name} />
                        </div>
                     </Link>
                  </div>
               ))}
         </div>
      </div>
   )
}

export default BrandsList
