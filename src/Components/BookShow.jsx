import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete , onUpdate}) {
const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
    console.log(book.id);
  };

  const handleEditClick = () => {

    setShowEdit(!showEdit);
  }
  const handleSubmit = (id,title) => {
    onUpdate(id, title);
    setShowEdit(false);
  };

 let content = <h3>{book.title}</h3>
 if (showEdit) {
   content = <BookEdit  onUpdate={handleSubmit} book={book} />
  
 }
  return (
    <>
      <div className="book-show">
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
        {content}
        <div className="actions">

        <button onClick={handleEditClick} className="edit" >
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
