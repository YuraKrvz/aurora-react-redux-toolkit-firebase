import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';

export default const store = configureStore({
   reducer: {
      user: userReducer,
   }
});