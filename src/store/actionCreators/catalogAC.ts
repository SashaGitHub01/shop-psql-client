import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemsService } from "../../API/ItemsService";
import { IQuery } from "../../API/types";


export const fetchProducts = createAsyncThunk(
   'catalog/fetchProducts',
   async (queries: IQuery, thunk) => {
      try {
         const res = await ItemsService.getItems(queries)

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка загрузки')
      }
   }
)