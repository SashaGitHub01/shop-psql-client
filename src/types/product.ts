import { IItemFull } from "./IItemFull";


export interface IStateProduct {
   product: IItemFull | null,
   error: string | null,
   isLoading: boolean,
}