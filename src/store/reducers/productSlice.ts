import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItemFull } from "../../types/IItemFull";
import { IStateProduct } from "../../types/product";
import { fetchProduct } from "../actionCreators/productAC";


const initialState: IStateProduct = {
   product: null,
   error: null,
   isLoading: false
}

export const productSlice = createSlice({
   name: "product",
   initialState,
   reducers: {},
   extraReducers: {
      [fetchProduct.fulfilled.type]: (state, action: PayloadAction<IItemFull>) => {
         state.product = action.payload;
         state.error = null;
         state.isLoading = false;
      },

      [fetchProduct.pending.type]: (state, action: PayloadAction<any>) => {
         state.isLoading = true;
      },

      [fetchProduct.rejected.type]: (state, action: PayloadAction<string>) => {
         state.error = action.payload;
         state.isLoading = false;
      }
   }
})

export const productReducer = productSlice.reducer;