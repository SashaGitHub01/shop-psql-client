import { IBrand } from "../types/IBrand";
import { instance } from "./instance";
import { IResponse } from "./types";


export class BrandsService {
   static getAll = async (): Promise<IBrand[]> => {
      const res = await instance.get<IResponse<IBrand[]>>('/api/brands/');

      return res.data.data
   }
}