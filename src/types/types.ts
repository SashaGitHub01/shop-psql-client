import { IType } from "./IType";


export interface IStateTypes {
   types: IType[],
   isLoading: boolean,
   error: string | null
}