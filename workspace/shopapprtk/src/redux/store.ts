import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './features/profileSlice'
import cartReducer from './features/cartSlice';
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
    // root reducer no need for combineReducer
   reducer: {
     "profile": profileReducer,
     "cart": cartReducer
   },
//    devTools: true
});

export default store;

// type ReturnTypeOf<T> = T extends (...args:any) => any ? infer R : never

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()