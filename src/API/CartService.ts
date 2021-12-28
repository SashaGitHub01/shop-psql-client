import { ICartItem } from "../types/ICartItem";
import { instance } from "./instance";
import { IQuery, IResponse } from "./types";


export class CartService {
   static getCart = async (): Promise<ICartItem[]> => {
      const res = await instance.get<IResponse<ICartItem[]>>('/api/cart/');

      return res.data.data
   }

   static addItem = async (id: string): Promise<ICartItem> => {
      const res = await instance.post<IResponse<ICartItem>>(`/api/cart/${id}`);

      return res.data.data
   }

   static deleteItem = async (id: string): Promise<ICartItem> => {
      const res = await instance.delete<IResponse<ICartItem>>(`/api/cart/${id}`);

      return res.data.data
   }

   static decr = async (id: string): Promise<ICartItem> => {
      const res = await instance.put<IResponse<ICartItem>>(`/api/cart/decr/${id}`);

      return res.data.data
   }

   static incr = async (id: string): Promise<ICartItem> => {
      const res = await instance.put<IResponse<ICartItem>>(`/api/cart/incr/${id}`);

      return res.data.data
   }
}