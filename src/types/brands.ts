import { IBrand } from "./IBrand";


export interface IStateBrands {
   brands: IBrand[],
   isLoading: boolean,
   error: string | null
}