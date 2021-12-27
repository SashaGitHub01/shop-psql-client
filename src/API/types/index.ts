

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
   username: string,
   password: string,
   role: 'ADMIN' | 'USER'
}

export interface IQuery {
   brandId: string | null,
   typeId: string | null,
   page: string | null,
}