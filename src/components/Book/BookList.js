import React from "react";
const BooksList = ({ isLoading, books, isLoggedIn, deleteBook, dispatch }) => {
  const bookList =
    books.length === 0
      ? "There are no books"
      : books.map((b) => {
          return (
            <li
              key={b.id}
              className="list-group-item d-flex  justify-content-between align-items-center"
            >
              <div>{b.title}</div>
              <div className="btn-group" role="group">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!isLoggedIn}
                >
                  Read
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  disabled={!isLoggedIn}
                  onClick={(_) =>
                    dispatch(deleteBook(b))
                      .unwrap()
                      .then((promiseResult) => {
                        console.log(promiseResult);
                      })
                      .catch((rejected) => {
                        console.log(rejected);
                      })
                  }
                >
                  Delete
                </button>
              </div>
            </li>
          );
        });

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "Loading..." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default BooksList;
