import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

function BookShow({ book }) {

  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById} = useContext(BooksContext);
  
  const handleDeleteClick = () => {
    deleteBookById(book.id);
    console.log(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onUpdate={handleSubmit} book={book} />;
  }
  return (
    <>
      <div className="book-show">
        <img
          alt="books"
          src={`https://picsum.photos/seed/${book.id}/300/200`}
        ></img>
        {content}
        <div className="actions">
          <button onClick={handleEditClick} className="edit">
            Edit
          </button>
          <button className="delete" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default BookShow;
