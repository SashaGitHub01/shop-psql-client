import { ICountData, IPageResponse } from "../API/types";
import { IItem } from "./IItem";


export interface IStateCatalog {
   products: ICountData<IItem[]>,
   isLoading: boolean,
   error: string | null
}