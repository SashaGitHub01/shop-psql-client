import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateAdmin } from "../../types/admin";
import { IItem } from "../../types/IItem";
import { fetchCreateItem } from "../actionCreators/adminAC";

const initialState: IStateAdmin = {
   items: [],
   isLoading: false,
   error: null
}

export const adminSlice = createSlice({
   name: 'admin',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchCreateItem.fulfilled.type]: (state, action: PayloadAction<IItem>) => {
         state.items.push(action.payload);
         state.isLoading = false;
         state.error = null
      },

      [fetchCreateItem.pending.type]: (state, action: PayloadAction<IItem>) => {
         state.isLoading = true;
      },

      [fetchCreateItem.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload
      },
   }
})

export const adminReducer = adminSlice.reducer;