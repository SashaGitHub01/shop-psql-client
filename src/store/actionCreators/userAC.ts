import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../API/AuthService";
import { ILoginBody, IRegBody } from "../../API/types";


export const fetchAuth = createAsyncThunk(
   'user/fetchAuth',
   async (_, thunk) => {
      try {
         const res = await AuthService.auth();

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка авторизации')
      }
   }
)

export const fetchSignIn = createAsyncThunk(
   'user/fetchSignin',
   async (data: ILoginBody, thunk) => {
      try {
         const res = await AuthService.login(data);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка авторизации')
      }
   }
)

export const fetchSignUp = createAsyncThunk(
   'user/fetchSignup',
   async (data: IRegBody, thunk) => {
      try {
         const res = await AuthService.reg(data);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка авторизации')
      }
   }
)