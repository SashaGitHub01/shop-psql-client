import { ICartItem } from "./ICartItem";


export interface IStateCart {
   items: ICartItem[],
   isLoading: boolean,
   error: string | null,
   totalPrice: number,
   totalCount: number,
   isAdding: boolean,
   isDeleting: boolean,
   isChangingCount: boolean
}