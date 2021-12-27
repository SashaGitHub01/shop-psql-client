import { IItem } from "./IItem";

export interface ICartItem {
   id: number,
   itemId: string,
   total: number,
   cartId: number,
   item: IItem
}