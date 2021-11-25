import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   email: null,
   id: null,
   token: null,
};

const userSlice = createSlice({
   name: 'user', 
   initialState,
   reducers: {
      setLogin(state, action){
         state.email = action.payload.email;
         state.id = action.payload.id;
         state.token = action.payload.token;
      },
      setLogout(){
         state.email = null;
         state.id = null;
         state.token = null;
      },
   },
})