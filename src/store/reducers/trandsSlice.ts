import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../types/IItem";
import { IStateTrands } from "../../types/trands";
import { fetchTrands } from "../actionCreators/trandsAC";


const initialState: IStateTrands = {
   trands: [],
   error: null,
   isLoading: false
}

export const trandsSlice = createSlice({
   name: 'trands',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchTrands.fulfilled.type]: (state, action: PayloadAction<IItem[]>) => {
         state.trands = action.payload;
         state.error = null;
         state.isLoading = false;
      },

      [fetchTrands.pending.type]: (state, action: PayloadAction<any>) => {
         state.isLoading = true;
      },

      [fetchTrands.rejected.type]: (state, action: PayloadAction<string>) => {
         state.error = action.payload;
         state.isLoading = false;
      }
   }
})

export const trandsReducer = trandsSlice.reducer;