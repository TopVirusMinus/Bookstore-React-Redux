import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, name: null },
  reducers: {
    toggleLogin: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
      state.name = action.payload;
    },
  },
});

export const { toggleLogin } = authSlice.actions;
export default authSlice.reducer;
