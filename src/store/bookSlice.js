import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    try {
      const fetchedBooks = await fetch("http://localhost:3005/books");
      const booksJson = await fetchedBooks.json();
      return booksJson;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = { book: null, isLoading: false };
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      console.log(action);
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action);
    },
  },
});

export default bookSlice.reducer;
