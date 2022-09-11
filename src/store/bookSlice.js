import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const fetchedBooks = await fetch("http://localhost:3005/books");
      const booksJson = await fetchedBooks.json();
      return booksJson;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  "books/insertBook",
  async (bookInfo, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(bookInfo),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const initialState = { books: [], isLoading: false, error: false };
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },

    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertBook.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.books.push(action.payload);
      state.isLoading = false;
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default bookSlice.reducer;
