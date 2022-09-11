import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.bookSlice);

  return (
    <>
      <nav class="navbar navbar-dark bg-dark justify-content-between">
        <a href="#" class="navbar-brand">
          My Books
        </a>
        <form class="form-inline">
          <button class="btn btn-outline-primary my-2 my-sm-0">Login</button>
        </form>
      </nav>

      {error && (
        <div class="alert alert-danger" role="alert">
          Failed to fetch books
        </div>
      )}
    </>
  );
};

export default Navbar;
