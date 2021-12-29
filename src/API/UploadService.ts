import { instance } from "./instance";
import { IResponse } from "./types";

export class UploadService {
   static uploadItemImg = async (file: File): Promise<string> => {
      const formData = new FormData();
      formData.append('image', file)

      const res = await instance.post<IResponse<string>>('/api/upload/items', formData, {
         headers: {
            "Content-Type": 'multipart/form-data'
         }
      });

      return res.data.data;
   }
}