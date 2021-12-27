import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateBrands } from "../../types/brands";
import { IBrand } from "../../types/IBrand";
import { fetchBrands } from "../actionCreators/brandsAC";

const initialState: IStateBrands = {
   brands: [],
   error: null,
   isLoading: false
}

export const brandsSlice = createSlice({
   name: 'brands',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchBrands.fulfilled.type]: (state, action: PayloadAction<IBrand[]>) => {
         state.brands = action.payload;
         state.isLoading = false;
         state.error = null;
      },

      [fetchBrands.pending.type]: (state, action: PayloadAction<any>) => {
         state.isLoading = true;
      },

      [fetchBrands.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      },
   }
})

export const brandsReducer = brandsSlice.reducer;