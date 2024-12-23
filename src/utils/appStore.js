import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const appStore = configureStore({
    reducer :{
        cart: cartReducer,
    }
});

export default appStore;
