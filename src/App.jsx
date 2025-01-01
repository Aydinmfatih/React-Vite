import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = (title) => {
    setBooks([
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ]);
    console.log(books);
  };

  return (
    <div className="app">
      <BookList onDelete={deleteBookById} books={books} />
      <BookCreate onSubmit={handleCreateBook} />
    </div>
  );
}

export default App;
