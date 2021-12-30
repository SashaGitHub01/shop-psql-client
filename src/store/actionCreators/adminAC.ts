import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsService } from "../../API/ItemsService";
import { ICreateItemBody } from "../../API/types";
import { UploadService } from "../../API/UploadService";

export const fetchCreateItem = createAsyncThunk(
   'admin/fetchCreateItem',
   async (body: ICreateItemBody, thunk) => {
      try {
         const url = await UploadService.uploadItemImg(body.image as File);

         if (!url) throw Error('Ошибка')

         const data = {
            ...body,
            image: url
         }

         const res = await ItemsService.create(data);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка')
      }
   }
)

export const fetchHistory = createAsyncThunk(
   'admin/fetchHistory',
   async (_, thunk) => {
      try {
         const res = await ItemsService.getHistory();

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка')
      }
   }
)