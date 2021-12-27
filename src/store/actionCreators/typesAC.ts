import { createAsyncThunk } from "@reduxjs/toolkit";
import { TypesService } from "../../API/TypesService";

export const fetchTypes = createAsyncThunk(
   'types/fetchTypes',
   async (_, thunkAPI) => {
      try {
         const res = await TypesService.getAll();

         return res;
      } catch (err) {
         return thunkAPI.rejectWithValue('Ошибка загрузки')
      }
   }
)