import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsService } from "../../API/ItemsService";


export const fetchTrands = createAsyncThunk(
   'trands/fetchTrands',
   async (_, thunk) => {
      try {
         const res = await ItemsService.getTrands();

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка загрузки')
      }
   }
)