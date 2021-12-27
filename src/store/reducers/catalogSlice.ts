import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountData } from "../../API/types";
import { IStateCatalog } from "../../types/catalog";
import { IItem } from "../../types/IItem";
import { fetchProducts } from "../actionCreators/catalogAC";

const initialState: IStateCatalog = {
   products: {
      rows: [],
      count: 0
   },
   isLoading: false,
   error: null
}

export const catalogSlice = createSlice({
   name: 'catalog',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchProducts.fulfilled.type]: (state, action: PayloadAction<ICountData<IItem[]>>) => {
         state.products = action.payload;
         state.isLoading = false;
         state.error = null;
      },

      [fetchProducts.pending.type]: (state, action: PayloadAction<any>) => {
         state.isLoading = true;
      },

      [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      }
   }
})

export const catalogReducer = catalogSlice.reducer;