import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartIcon } from "../../../assets/icons";
import s from './Header.module.scss';
import Modal from "../../../UI/Modal/Modal";
import SignInForm from "../../SignModal/SignInForm/SignInForm";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import SignModal from "../../SignModal/SignModal";

const Header = () => {
   const [isActive, setIsActive] = useState<boolean>(false);
   const nav = useNavigate();

   const { user, isAuth } = useTypedSelector(state => state.user)

   const handleClose = () => {
      setIsActive(false)
   }

   const handleOpen = () => {
      setIsActive(true)
   }

   const handleClick = (e: React.MouseEvent) => {
      if (!isAuth) {
         return handleOpen();
      }

      return nav('/cart')
   }

   return (
      <header className={s.header}>
         {isActive
            && <SignModal
               handleClose={handleClose}
            />}
         <div className={s.header_row}>
            <Link to={'/'}>
               <div className={s.header_logo}>
                  <span>TOP-SHOP</span>.com
               </div>
            </Link>
            <div className={s.header_nav}>
               <ul className={s.header_list}>
                  <li className={s.list_item}>
                     <div className={s.item_cont} onClick={handleClick} >
                        <CartIcon className={s.cart_icon} />
                        <span>Корзина</span>
                     </div>
                  </li>
                  <li className={s.header_btn}>
                     {user
                        ? <div className={s.user_panel}>
                           <div className={s.user_email}>
                              <span>
                                 {user.email}
                              </span>
                           </div>
                        </div>
                        : <button className={s.sign_button} onClick={handleOpen}>
                           <span>Войти</span>
                        </button>}
                  </li>
               </ul>
            </div>
         </div>
      </header>
   )
}

export default Header
