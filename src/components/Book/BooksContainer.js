import React, { useEffect, useState } from "react";
import BookDetails from "./BookDetails";
import BookList from "./BookList";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/bookSlice";
import { deleteBook } from "../../store/bookSlice";
import "./book.css";

const BooksContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, books } = useSelector((state) => state.bookSlice);
  const { isLoggedIn } = useSelector((state) => state.authSlice);
  const [currReadBook, setCurrReadBook] = useState({});

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const readBook = (book) => {
    setCurrReadBook((prev) => book);
  };

  return (
    <>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BookList
            readBook={readBook}
            dispatch={dispatch}
            deleteBook={deleteBook}
            isLoading={isLoading}
            books={books}
            isLoggedIn={isLoggedIn}
          />
        </div>
        <div className="col side-line">
          <BookDetails isLoggedIn={isLoggedIn} currBook={currReadBook} />
        </div>
      </div>
    </>
  );
};

export default BooksContainer;
