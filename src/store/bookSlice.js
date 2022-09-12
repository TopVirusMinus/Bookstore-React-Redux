import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { insertLog } from "./logSlice";

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
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    try {
      bookInfo.username = getState().authSlice.name;
      const res = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(bookInfo),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
      dispatch(insertLog({ name: "insertBook", status: "success" }));
      return data;
    } catch (error) {
      dispatch(insertLog({ name: "insertBook", status: "failed" }));
      rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (book, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/books/${book.id}`, {
        method: "DELETE",
      });
      dispatch(insertLog({ name: "deleteBook", status: "success" }));
      return book;
    } catch (error) {
      dispatch(insertLog({ name: "deleteBook", status: "failed" }));
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
    //Get Book
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

    //insert Book
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

    //Delete Book
    [deleteBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((b) => action.payload.id !== b.id);
    },
    [deleteBook.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export default bookSlice.reducer;
