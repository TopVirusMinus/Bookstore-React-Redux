import { createSlice } from "@reduxjs/toolkit";

const logSlice = createSlice({
  name: "log",
  initialState: { logs: [] },
  reducers: {
    insertLog: (state, action) => {
      state.logs.push(action.payload);
    },
  },
});

export const { insertLog } = logSlice.actions;
export default logSlice.reducer;
