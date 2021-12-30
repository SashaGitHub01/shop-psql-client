import React, { useCallback, useEffect, useState } from "react";
import { nextArrow, prevArrow } from "../../assets/icons";
import { getPagesArray } from "../../utils/getPagesArray";
import { getPagesCount } from "../../utils/getPagesCount";
import s from './Paginator.module.scss';

interface IPaginator {
   limit: number,
   count: number,
   current: number,
   handleClick: (e: any) => void
}

const Paginator: React.FC<IPaginator> = ({ limit, count, handleClick, current }) => {
   const [total, setTotal] = useState<number>(0);
   const [arr, setArr] = useState<number[]>([]);

   useEffect(() => {
      const num = getPagesCount(limit, count);

      setTotal(num)
   }, [limit, count])

   useEffect(() => {
      if (total) {
         setArr(getPagesArray(total, current))
      }
   }, [current, total])

   return (
      <div className={s.pages_list}>
         <div
            className={s.nav}
            data-page={1}
            onClick={handleClick}
         >
            <div
               className={s.arrow}
               data-page={1}
               onClick={handleClick}
               style={{ backgroundImage: `url(${prevArrow})` }}
            >
            </div>
         </div>
         {arr.map((num) => (
            <div
               onClick={handleClick}
               className={`${s.page} ${current == num ? s.active : ''}`}
               key={num}
               data-page={num}
            >
               {num}
            </div>
         ))}
         <div
            className={s.nav}
            data-page={total}
            onClick={handleClick}
         >
            <div
               data-page={total}
               onClick={handleClick}
               className={s.arrow}
               style={{ backgroundImage: `url(${nextArrow})` }}
            >
            </div>
         </div>
      </div>
   )
}

export default Paginator
