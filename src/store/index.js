import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    bookSlice,
    authSlice,
  },
});

export default store;
