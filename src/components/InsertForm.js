import { insertBook } from "../store/bookSlice";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const InsertForm = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.authSlice);

  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    };

    console.log(data);
    dispatch(insertBook(data));

    title.current.value = null;
    price.current.value = null;
    description.current.value = null;
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Title</label>
            <input
              ref={title}
              type="text"
              class="form-control"
              s
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Price</label>
            <input
              ref={price}
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              ref={description}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary" disabled={!isLoggedIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InsertForm;
