import React, { useEffect, useState } from "react";
import { CloseIcon, MinusIcon } from "../../../assets/icons";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { fetchDecr, fetchIncr, fetchRemove } from "../../../store/actionCreators/cartAC";
import { ICartItem } from "../../../types/ICartItem";
import s from './CartItem.module.scss';

interface ICartItemProps {
   item: ICartItem
}

const CartItem: React.FC<ICartItemProps> = ({ item }) => {
   const [total, setTotal] = useState<number>(0);

   const { isDeleting, isChangingCount } = useTypedSelector(state => state.cart)

   const dispatch = useAppDispatch();

   useEffect(() => {
      const total = item.item.price * item.total;

      setTotal(total)
   }, [item])

   const handleRemove = () => {
      dispatch(fetchRemove(item.item.id))
   }

   const handleDecr = () => {
      dispatch(fetchDecr(item.itemId))
   }

   const handleIncr = () => {
      dispatch(fetchIncr(item.itemId))
   }

   return (
      <div className={
         `${s.item} ${isDeleting ? s.disabled : ''}`
      }>
         <div className={s.item_row}>
            <div className={s.item_main}>
               <div className={s.item_img}>
                  <img src={item.item.image} alt={item.item.name} />
               </div>
               <div className={s.item_name}>
                  <span>
                     {item.item.name}
                  </span>
               </div>
            </div>
            <div className={s.item_ctrl}>
               <div className={s.ctrl_row}>
                  <button
                     onClick={handleDecr}
                     disabled={item.total === 1 || isChangingCount}
                     className={s.ctrl_btn}
                  >
                     <MinusIcon className={s.ctrl_icon} />
                  </button>
                  <div className={s.ctrl_val}>
                     <span>
                        {item.total}
                     </span>
                  </div>
                  <button
                     onClick={handleIncr}
                     disabled={item.total === 10 || isChangingCount}
                     className={s.ctrl_btn}
                  >
                     <CloseIcon className={`${s.ctrl_icon} ${s.plus_i}`} />
                  </button>
               </div>
            </div>
            <div className={s.item_price}>
               <span>{total}</span>₽
            </div>
            <div className={s.item_del}>
               <div className={s.del_circle} onClick={handleRemove}>
                  <CloseIcon className={s.del_icon} />
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartItem
