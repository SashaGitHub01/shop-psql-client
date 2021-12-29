import { IUser } from "../types/IUser";
import { instance } from "./instance";
import { ILoginBody, IRegBody, IResponse } from "./types";

export class AuthService {
   static auth = async (): Promise<IUser> => {
      const res = await instance.get<IResponse<IUser>>('/api/user/auth');

      return res.data.data
   }

   static login = async (body: ILoginBody): Promise<IUser> => {
      const res = await instance.post<IResponse<IUser>>('/api/user/login', body);

      return res.data.data
   }

   static logout = async (): Promise<any> => {
      const res = await instance.get<any>('/api/user/logout');

      return res.data;
   }

   static reg = async (body: IRegBody): Promise<IUser> => {
      const res = await instance.post<IResponse<IUser>>('/api/user/registration', body);

      return res.data.data
   }
}