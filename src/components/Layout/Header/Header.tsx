import React from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../../../assets/icons";
import s from './Header.module.scss';

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.header_row}>
            <Link to={'/'}>
               <div className={s.header_logo}>
                  <span>TOP-SHOP</span>.com
               </div>
            </Link>
            <div className={s.header_nav}>
               <ul className={s.header_list}>
                  <li className={s.list_item}>
                     <CartIcon className={s.cart_icon} />
                     <span>Корзина</span>
                  </li>
                  <li className={s.header_btn}>
                     <button className={s.sign_button}>
                        <span>Войти</span>
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   )
}

export default Header
