import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './features/profileSlice'
import cartReducer from './features/cartSlice';

const store = configureStore({
    // root reducer no need for combineReducer
   reducer: {
     "profile": profileReducer,
     "cart": cartReducer
   },
//    devTools: true
});

export default store;