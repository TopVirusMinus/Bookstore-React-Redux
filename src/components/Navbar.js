import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.bookSlice);
  const { isLoggedIn } = useSelector((state) => state.authSlice);

  return (
    <>
      <nav class="navbar navbar-dark bg-dark justify-content-between">
        <a href="#" class="navbar-brand">
          My Books
        </a>
        <button
          type="submit"
          class="btn btn-outline-primary my-2 my-sm-0"
          onClick={() => dispatch(toggleLogin())}
        >
          {isLoggedIn ? "Log Out" : "Login"}
        </button>
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
