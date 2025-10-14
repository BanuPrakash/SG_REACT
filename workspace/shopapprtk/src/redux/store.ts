import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './features/profileSlice'
import cartReducer from './features/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import productReducer from './features/productSlice';
import { customerApi } from "./api/customersApi";

const store = configureStore({
    // root reducer no need for combineReducer
   reducer: {
     "profile": profileReducer,
     "cart": cartReducer,
     "products": productReducer,
     [customerApi.reducerPath]: customerApi.reducer
   },
//    devTools: true
// middleware for enabling caching, polling
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customerApi.middleware)
});

export default store;

// type ReturnTypeOf<T> = T extends (...args:any) => any ? infer R : never

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()