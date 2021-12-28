import { IBrand } from "./IBrand";
import { IInfo } from "./IInfo";
import { IItem } from "./IItem";
import { IType } from "./IType";


export interface IItemFull extends IItem {
   item_infos: IInfo[],
   brand: IBrand,
   type: IType
}