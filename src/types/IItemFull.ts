import { IInfo } from "./IInfo";
import { IItem } from "./IItem";


export interface IItemFull extends IItem {
   item_infos: IInfo[]
}