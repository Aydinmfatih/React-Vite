import { useState } from "react";
function BookEdit({ onUpdate, book }) {

  const [title,setTitle] = useState(book.title);
  
  const handleOnSubmit = (event) => {
    event.preventDefault();
    
  };

  const handleOnChange = (event) => {

   setTitle(event.target.value);
  };
  const handleUpdateOnClick = () => {
    onUpdate(book.id,title);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="book-edit">
        <label>Edit Book</label>
        <input value={title} onChange={handleOnChange} className="input" type="text"></input>
        <button onClick={handleUpdateOnClick} className="button is-primary">Update !</button>
      </form>
    </div>
  );
}

export default BookEdit;
