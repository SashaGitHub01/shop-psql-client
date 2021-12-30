import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminSlice";
import { brandsReducer } from "./reducers/brandsSlice";
import { cartReducer } from "./reducers/cartSlice";
import { catalogReducer } from "./reducers/catalogSlice";
import { productReducer } from "./reducers/productSlice";
import { trandsReducer } from "./reducers/trandsSlice";
import { typesReducer } from "./reducers/typesSlice";
import { userReducer } from "./reducers/userSlice";

const rootReducer = combineReducers({
   types: typesReducer,
   brands: brandsReducer,
   trands: trandsReducer,
   catalog: catalogReducer,
   product: productReducer,
   user: userReducer,
   cart: cartReducer,
   admin: adminReducer
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']