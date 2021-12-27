import { createAsyncThunk } from "@reduxjs/toolkit";
import { BrandsService } from "../../API/BrandsService";

export const fetchBrands = createAsyncThunk(
   'brands/fetchBrands',
   async (_, thunk) => {
      try {
         const res = await BrandsService.getAll();

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка загрузки')
      }
   }
)