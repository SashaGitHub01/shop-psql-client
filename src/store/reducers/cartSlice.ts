import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStateCart } from "../../types/cart";
import { ICartItem } from "../../types/ICartItem";
import { fetchAdd, fetchCart, fetchDecr, fetchIncr, fetchRemove } from "../actionCreators/cartAC";


const initialState: IStateCart = {
   items: [],
   totalCount: 0,
   totalPrice: 0,
   isLoading: false,
   error: null,
   isAdding: false,
   isChangingCount: false,
   isDeleting: false,
}

const getTotalPrice = (items: ICartItem[]) => {
   let result = 0;

   items.forEach(({ total, item }) => {
      const price = total * item.price;

      result += price
   })

   return result;
}

const getTotalCount = (items: ICartItem[]) => {
   let result = 0;

   items.forEach(({ total }) => {
      result += total
   })

   return result;
}


export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {},
   extraReducers: {
      //get cart
      [fetchCart.fulfilled.type]: (state, action: PayloadAction<ICartItem[]>) => {
         state.error = null;
         state.isLoading = false;
         state.items = action.payload;
         state.totalCount = getTotalCount(action.payload);
         state.totalPrice = getTotalPrice(action.payload);
      },

      [fetchCart.pending.type]: (state, action: PayloadAction<any>) => {
         state.isLoading = true;
      },

      [fetchCart.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      },

      //add to cart
      [fetchAdd.fulfilled.type]: (state, action: PayloadAction<ICartItem>) => {
         state.error = null;
         state.isAdding = false;
         state.items.push(action.payload);
         state.totalPrice += action.payload.item.price;
         state.totalCount += action.payload.total;
      },

      [fetchAdd.pending.type]: (state, action: PayloadAction<any>) => {
         state.isAdding = true;
      },

      [fetchAdd.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isAdding = false;
         state.error = action.payload;
      },

      //remove from cart
      [fetchRemove.fulfilled.type]: (state, action: PayloadAction<string>) => {
         const id = action.payload;
         const item = state.items.find(({ itemId }) => id == itemId)

         if (!item) return;

         const price = item.total * item.item.price;

         state.items = state.items.filter(({ itemId }) => itemId != id)
         state.totalPrice -= price;
         state.totalCount -= item.total;
         state.isDeleting = false;
      },

      [fetchRemove.pending.type]: (state, action: PayloadAction<any>) => {
         state.isDeleting = true;
      },

      [fetchRemove.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isDeleting = false;
         state.error = action.payload;
      },

      //fetch incr
      [fetchIncr.fulfilled.type]: (state, action: PayloadAction<string>) => {
         const id = action.payload;
         const item = state.items.find(({ itemId }) => id == itemId)

         if (!item) return;

         state.items = state.items.map((item) => {
            if (item.itemId != id) return item;

            item.total += 1

            return item;
         })
         state.totalPrice += item.item.price;
         state.totalCount += 1;
         state.isChangingCount = false;
      },

      [fetchIncr.pending.type]: (state, action: PayloadAction<any>) => {
         state.isChangingCount = true;
      },

      [fetchIncr.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isChangingCount = false;
         state.error = action.payload;
      },

      //fetch decr
      [fetchDecr.fulfilled.type]: (state, action: PayloadAction<string>) => {
         const id = action.payload;
         const item = state.items.find(({ itemId }) => id == itemId)

         if (!item) return;

         state.items = state.items.map((item) => {
            if (item.itemId != id) return item;

            item.total -= 1

            return item;
         })
         state.totalPrice -= item.item.price;
         state.totalCount -= 1;
         state.isChangingCount = false;
      },

      [fetchDecr.pending.type]: (state, action: PayloadAction<any>) => {
         state.isChangingCount = true;
      },

      [fetchDecr.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isChangingCount = false;
         state.error = action.payload;
      },
   }
})

export const cartReducer = cartSlice.reducer;