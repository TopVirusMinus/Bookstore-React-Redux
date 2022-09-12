import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, name: "Mustafa Walid" },
  reducers: {
    toggleLogin: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { toggleLogin } = authSlice.actions;
export default authSlice.reducer;
