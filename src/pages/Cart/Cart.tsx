import React from "react";
import CartList from "../../components/Cart/CartList/CartList";
import PageHead from "../../components/PageHead/PageHead";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import s from './Cart.module.scss';

const Cart = () => {
   const { items, isLoading, totalPrice, totalCount } = useTypedSelector(state => state.cart)

   return (
      <div className={s.cart}>
         <PageHead title="Корзина" back={true} />
         {items.length > 0
            ? <div className={s.cart_row}>
               <div className={s.cart_left}>
                  <CartList items={items} isLoading={isLoading} />
               </div>
               <div className={s.cart_rigt}>
                  <div className={s.check}>
                     <div className={s.check_window}>
                        <div className={s.check_head}>
                           <span>Ваш заказ</span>
                        </div>
                        <div className={s.check_info}>
                           <div className={s.info_item}>
                              <div className={s.info_title}>
                                 <span>Кол-во товаров:</span>
                              </div>
                              <div className={s.info_res}>
                                 <span>{totalCount} шт</span>
                              </div>
                           </div>
                           <div className={s.info_item}>
                              <div className={s.info_title}>
                                 <span>Итого:</span>
                              </div>
                              <div className={s.info_res}>
                                 <span>{totalPrice} ₽</span>
                              </div>
                           </div>
                        </div>
                        <div className={s.check_footer}>
                           <button className={s.pay_button}>
                              <span>Оплатить</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            : <div className={s.empty}>
               <span>Ваша корзина пуста</span>
            </div>}
      </div>
   )
}

export default Cart
