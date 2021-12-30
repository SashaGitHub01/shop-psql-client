import { ICreateInfo } from "../../types/ICreateInfo"


export interface IResponse<T> {
   data: T,
   error?: string
}

export interface ICountData<T> {
   count: number,
   rows: T
}


export interface IPageResponse<T> {
   data: ICountData<T>,
   error?: string
}

export interface ILoginBody {
   username: string,
   password: string
}

export interface IRegBody {
   email: string,
   password: string,
   role: 'ADMIN' | 'USER'
}

export interface IQuery {
   brandId: string | null,
   typeId: string | null,
   page: number | null,
   limit?: number
}

export interface ICreateItemBody {
   brandId: string,
   typeId: string,
   price: number,
   image: File | string,
   name: string,
   info?: ICreateInfo[]
}
