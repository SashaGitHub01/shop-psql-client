import { IStateTypes } from "../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IType } from "../../types/IType";
import { fetchTypes } from "../actionCreators/typesAC";

const initialState: IStateTypes = {
   types: [],
   isLoading: false,
   error: null
}

export const typesSlice = createSlice({
   name: 'types',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchTypes.fulfilled.type]: (state, action: PayloadAction<IType[]>) => {
         state.isLoading = false;
         state.error = null;
         state.types = action.payload
      },

      [fetchTypes.pending.type]: (state, action: PayloadAction<any>) => {
         state.isLoading = true;
      },


      [fetchTypes.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      }
   }
})

export const typesReducer = typesSlice.reducer;
export const typesActions = typesSlice.actions;