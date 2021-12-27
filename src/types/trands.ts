import { IItem } from "./IItem";


export interface IStateTrands {
   trands: IItem[],
   error: string | null,
   isLoading: boolean
}