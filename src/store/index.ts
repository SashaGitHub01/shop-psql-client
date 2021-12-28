import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { brandsReducer } from "./reducers/brandsSlice";
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
   user: userReducer
});

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']