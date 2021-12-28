import React, { useEffect, useState } from "react";
import { ArrowIcon } from "../../assets/icons";
import s from './PageHead.module.scss';
import { useNavigate, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IType } from "../../types/IType";
import { IBrand } from "../../types/IBrand";

interface IPageHead {
   title: string,
   back: boolean,
   to?: string
}

const PageHead: React.FC<IPageHead> = ({ title, back, to }) => {
   const [brand, setBrand] = useState<IBrand | undefined>(undefined);
   const [type, setType] = useState<IType | undefined>(undefined);

   const types = useTypedSelector(state => state.types.types)
   const brands = useTypedSelector(state => state.brands.brands)

   const nav = useNavigate();
   const loc = useLocation()

   const handleNav = () => {
      const path = to || -1;

      nav(path as string)
   }

   useEffect(() => {
      const brand = new URLSearchParams(loc.search).get('brandId');
      const type = new URLSearchParams(loc.search).get('typeId');

      if (types) setType(types.find(({ id }) => id == type))
      if (brands) setBrand(brands.find(({ id }) => id == brand))
   }, [types, brands, loc.search])

   return (
      <div className={s.head}>
         <div className={s.head_body}>
            {back
               && <div className={s.back} onClick={handleNav}>
                  <ArrowIcon className={s.arrow_icon} />
                  <span>Вернуться</span>
               </div>}
            <h6 className={s.head_title}>
               <span>
                  {title}
               </span>
               <div></div>
            </h6>
            {brand
               && <div className={s.head_title}>
                  <span>{brand.name}</span>
                  <div></div>
               </div>}
            {type
               && <div className={s.head_title}>
                  <span>{type.name}</span>
                  <div></div>
               </div>}
         </div>
      </div>
   )
}

export default PageHead
