import React, { useEffect } from "react";
import s from './Product.module.scss';
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchProduct } from "../../store/actionCreators/productAC";

const Product = () => {
   const dispatch = useAppDispatch();
   const { id } = useParams();

   useEffect(() => {
      if (id) dispatch(fetchProduct(id))
   }, [id])

   return (
      <div>
         Prod
      </div>
   )
}

export default Product;
