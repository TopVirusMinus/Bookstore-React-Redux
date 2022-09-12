import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../store/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.bookSlice);
  const { isLoggedIn } = useSelector((state) => state.authSlice);
  const { name } = useSelector((state) => state.authSlice);

  const username = useRef("");

  return (
    <>
      <nav class="navbar navbar-dark bg-dark justify-content-between">
        <a href="#" class="navbar-brand">
          My Books
        </a>
        {isLoggedIn && <h2 className="text-light">Hello {name}</h2>}

        <div className="form-inline">
          {!isLoggedIn && (
            <input
              ref={username}
              placeholder="Enter Username"
              className=" mr-4 form-control"
            />
          )}
          <button
            type="submit"
            class="btn btn-outline-primary my-2 my-sm-0"
            onClick={() => {
              //console.log(username.current.value);
              isLoggedIn
                ? dispatch(toggleLogin(null))
                : dispatch(toggleLogin(username.current.value));
            }}
          >
            {isLoggedIn ? "Log Out" : "Login"}
          </button>
        </div>
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
