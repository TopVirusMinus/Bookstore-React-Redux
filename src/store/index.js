import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import authSlice from "./authSlice";
import logSlice from "./logSlice";

const store = configureStore({
  reducer: {
    bookSlice,
    authSlice,
    logSlice,
  },
});

export default store;
