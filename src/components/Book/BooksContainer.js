import React, { useEffect } from "react";
import BookDetails from "./BookDetails";
import BookList from "./BookList";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/bookSlice";
import "./book.css";

const BooksContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, books } = useSelector((state) => state.bookSlice);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BookList isLoading={isLoading} books={books} />
        </div>
        <div className="col side-line">
          <BookDetails />
        </div>
      </div>
    </>
  );
};

export default BooksContainer;
