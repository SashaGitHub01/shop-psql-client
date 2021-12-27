import React from "react";
import s from './Loader.module.scss';

const Loader = () => {
   return (
      <div className={s.loader}>
         <div className={`${s.wrapper}`}>
            <div className={s.clock}></div>
            <div className={s.clock}></div>
         </div>
      </div>
   )
}

export default Loader
