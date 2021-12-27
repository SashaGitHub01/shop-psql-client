import { IType } from "../types/IType";
import { instance } from "./instance";
import { IResponse } from "./types";


export class TypesService {
   static getAll = async (): Promise<IType[]> => {
      const res = await instance.get<IResponse<IType[]>>('/api/types/');

      return res.data.data
   }
}