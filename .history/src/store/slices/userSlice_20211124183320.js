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
      setUser(){

      },
      setLogOut(){

      },
   },
})