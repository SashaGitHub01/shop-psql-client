import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartService } from "../../API/CartService";


export const fetchCart = createAsyncThunk(
   'cart/fetchCart',
   async (_, thunk) => {
      try {
         const res = await CartService.getCart();

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка загрузки')
      }
   }
)

export const fetchAdd = createAsyncThunk(
   'cart/fetchAdd',
   async (id: string, thunk) => {
      try {
         const res = await CartService.addItem(id);

         return res;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка загрузки')
      }
   }
)

export const fetchRemove = createAsyncThunk(
   'cart/fetchRemove',
   async (id: string, thunk) => {
      try {
         await CartService.deleteItem(id);

         return id;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка удаления')
      }
   }
)

export const fetchIncr = createAsyncThunk(
   'cart/fetchIncr',
   async (id: string, thunk) => {
      try {
         await CartService.incr(id);

         return id;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка')
      }
   }
)


export const fetchDecr = createAsyncThunk(
   'cart/fetchDect',
   async (id: string, thunk) => {
      try {
         await CartService.decr(id);

         return id;
      } catch (err) {
         return thunk.rejectWithValue('Ошибка')
      }
   }
)