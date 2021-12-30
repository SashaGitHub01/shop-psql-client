import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";
import { IStateUser } from "../../types/user";
import { fetchAuth, fetchLogout, fetchSignIn, fetchSignUp } from "../actionCreators/userAC";

const initialState: IStateUser = {
   user: null,
   isAuth: false,
   isInitialized: false,
   isLoading: false,
   isLogin: false,
   error: null
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {
      //auth
      [fetchAuth.pending.type]: (state, action: PayloadAction<any>) => {
         state.isLoading = true;
      },

      [fetchAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
         state.isLoading = false;
         state.isAuth = true;
         state.user = action.payload;
         state.error = null;
         state.isInitialized = true;
      },

      [fetchAuth.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
         state.isInitialized = true;
      },

      //logout
      [fetchLogout.pending.type]: (state, action: PayloadAction<any>) => {
         state.isAuth = false;
         state.user = null;
         state.error = null
      },

      [fetchLogout.rejected.type]: (state, action: PayloadAction<string>) => {
         state.error = action.payload
      },

      //login
      [fetchSignIn.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
         state.error = null;
         state.isLogin = false;
         state.user = action.payload;
         state.isAuth = true
      },

      [fetchSignIn.pending.type]: (state, action: PayloadAction<any>) => {
         state.isLogin = true;
      },

      [fetchSignIn.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLogin = false;
         state.error = action.payload
      },

      //reg
      [fetchSignUp.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
         state.error = null;
         state.isLogin = false;
         state.user = action.payload;
         state.isAuth = true
      },

      [fetchSignUp.pending.type]: (state, action: PayloadAction<any>) => {
         state.isLogin = true;
      },

      [fetchSignUp.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLogin = false;
         state.error = action.payload
      },
   }
})

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;