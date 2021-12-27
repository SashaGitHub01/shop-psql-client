import { IItem } from "../types/IItem";
import { IItemFull } from "../types/IItemFull";
import { instance } from "./instance";
import { ICountData, IPageResponse, IQuery, IResponse } from "./types";


export class ItemsService {
   static getTrands = async (): Promise<IItem[]> => {
      const res = await instance.get<IResponse<IItem[]>>('/api/items/trands');

      return res.data.data
   }

   static getItems = async (query: IQuery): Promise<ICountData<IItem[]>> => {
      const res = await instance.get<IPageResponse<IItem[]>>(
         `/api/items?brandId=${query.brandId || ''}&typeId=${query.typeId || ''}&page=${query.page || 1}`
      );

      return res.data.data
   }

   static getOne = async (id: string): Promise<IItemFull> => {
      const res = await instance.get<IResponse<IItemFull>>(`/api/items/${id}`);

      return res.data.data
   }
}