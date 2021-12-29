import { IItem } from "./IItem";

export interface IStateAdmin {
   items: IItem[],
   isLoading: boolean,
   error: string | null
}