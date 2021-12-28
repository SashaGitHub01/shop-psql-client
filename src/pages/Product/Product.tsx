import React, { useEffect, useState } from "react";
import s from './Product.module.scss';
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchProduct } from "../../store/actionCreators/productAC";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import PageHead from "../../components/PageHead/PageHead";
import { getRating } from "../../utils/getRating";
import { IconType } from "react-icons";
import { v4 } from 'uuid';
import BigImg from "../../components/Placeholders/BigImg";
import ProdWindow from "../../components/Placeholders/ProdWindow";
import { fetchAdd } from "../../store/actionCreators/cartAC";

const Product = () => {
   const [rating, setRating] = useState<IconType[]>([]);
   const [inCart, setInCart] = useState<boolean>(false);

   const dispatch = useAppDispatch();
   const { id } = useParams();

   const { product, isLoading, error } = useTypedSelector(state => state.product)
   const { items, isAdding } = useTypedSelector(state => state.cart)

   useEffect(() => {
      if (id) dispatch(fetchProduct(id));
   }, [id])

   useEffect(() => {
      if (product) {
         const rate = getRating(product.rating);

         setRating(rate);

         if (items) {
            const item = items.find(({ itemId }) => {
               return itemId == product.id
            })

            if (item) {
               setInCart(true)
            } else {
               setInCart(false)
            }
         }
      }
   }, [product, items])

   const handleAddToCart = () => {
      if (id) dispatch(fetchAdd(id))
   }

   return (
      <div className={s.product}>
         <div className={s.product_col}>
            <PageHead title={product?.name || ''} back={true} />
            <div className={s.product_row}>
               {isLoading
                  ? <>
                     <BigImg />
                     <ProdWindow />
                  </>
                  : product
                     ? <>
                        <div className={s.product_img}>
                           <img src={product.image} alt={product.name} />
                        </div><div className={s.product_body}>
                           <div className={s.product_window}>
                              <div className={s.product_name}>
                                 <span>{product.name}</span>
                              </div>
                              <div className={s.price_row}>
                                 <div className={s.price}>
                                    <span>{product.price}</span>₽
                                 </div>
                                 <div className={s.price_btn}>
                                    <button
                                       disabled={inCart}
                                       className={s.button}
                                       onClick={handleAddToCart}
                                    >
                                       <span>
                                          {inCart ? 'Товар в корзине' : 'В корзину'}
                                       </span>
                                    </button>
                                 </div>
                              </div>
                              <div className={s.rating}>
                                 <span>{product.rating}</span>
                                 <div className={s.stars_row}>
                                    {rating
                                       && rating.map((Icon) => (
                                          <Icon className={s.star_icon} key={v4()} />
                                       ))}
                                 </div>
                              </div>
                              <div className={s.about}>
                                 <div className={s.about_item}>
                                    <div className={s.about_name}>
                                       Производитель:
                                    </div>
                                    <span>{product.brand.name}</span>
                                 </div>
                                 <div className={s.about_item}>
                                    <div className={s.about_name}>
                                       Тип:
                                    </div>
                                    <span>{product.type.name}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </>
                     : null}
            </div>
            <div className={s.params}>
               <div className={s.params_title}>
                  <span>Характеристики {product?.name}</span>
               </div>
               <div className={s.params_col}>
                  <ul className={s.params_list}>
                     {product
                        && product.item_infos.length
                        ? product.item_infos.map(({ description, title, id }) => (
                           <li className={s.params_item} key={id}>
                              <div className={s.title}>
                                 <span>
                                    {title}:
                                 </span>
                              </div>
                              <div className={s.descr}>
                                 <span>
                                    {description}
                                 </span>
                              </div>
                           </li>
                        ))
                        : <div className={s.params_empty}>
                           <span>
                              Нет информации о товаре
                           </span>
                        </div>}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Product;
