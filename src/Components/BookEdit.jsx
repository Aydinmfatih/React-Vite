import { useState, useContext } from "react";
import BooksContext from "../context/books";
function BookEdit({ onUpdate, book }) {
  const { updateBookById } = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  const handleOnChange = (event) => {
    setTitle(event.target.value);
  };
  const handleUpdateOnClick = () => {
    onUpdate();
    updateBookById(book.id, title);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="book-edit">
        <label>Edit Book</label>
        <input
          value={title}
          onChange={handleOnChange}
          className="input"
          type="text"
        ></input>
        <button onClick={handleUpdateOnClick} className="button is-primary">
          Update !
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
