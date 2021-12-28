import { IUser } from "./IUser";

export interface IStateUser {
   user: IUser | null,
   isLoading: boolean,
   isLogin: boolean,
   error: string | null,
   isAuth: boolean
}