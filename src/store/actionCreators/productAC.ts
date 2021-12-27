import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsService } from "../../API/ItemsService";


export const fetchProduct = createAsyncThunk(
   'product/fetchProduct',
   async (id: string, thunk) => {
      try {
         const res = await ItemsService.getOne(id);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка зугрузки')
      }
   })