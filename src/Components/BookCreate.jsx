import { useState } from "react";

function BookCreate({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    onSubmit(term);
    setTerm("");
  };

  const handleOnChange = (e) => {
    setTerm(e.target.value);
   
  };

  return (
    <div className="book-create">
              <h3>Add a Book</h3>
      <form onSubmit={handleOnSubmit}>
        <label>Create Book</label>
        <input className="input"  value={term} onChange={handleOnChange} type="text"></input>
        <button className="button">Create !</button>
      </form>
    </div>
  );
}

export default BookCreate;