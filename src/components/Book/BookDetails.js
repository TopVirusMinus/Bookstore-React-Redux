import React, { Fragment } from "react";

const BookInfo = ({ currBook }) => {
  return (
    <>
      <h2>Book Details</h2>

      {Object.values(currBook).length > 0 ? (
        <div>
          <p className="fw-bold">Title: {currBook.title}</p>
          <p className="fw-light">Description: {currBook.description}</p>
          <p className="fst-italic">Price: {currBook.price}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no book selected yet. Please select!
        </div>
      )}
    </>
  );
};

export default BookInfo;
