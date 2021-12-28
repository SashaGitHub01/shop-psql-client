import React from "react";
import { ICartItem } from "../../../types/ICartItem";
import CartItem from "../CartItem/CartItem";
import s from './CartList.module.scss';

interface ICartList {
   items: ICartItem[],
   isLoading: boolean
}

const CartList: React.FC<ICartList> = ({ items }) => {
   return (
      <div className={s.list}>
         {
            items.map((item) => (
               <CartItem item={item} key={item.id} />
            ))
         }
      </div>
   )
}

export default CartList
