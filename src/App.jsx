import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    setBooks([...books, { id: 123, title: title }]);
    console.log(books);
  };

  return (
    <>
      <BookCreate onSubmit={handleCreateBook} />
      <BookList books={books} />
    </>
  );
}

export default App;
