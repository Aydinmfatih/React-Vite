import { useState, useEffect } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const updateBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: title,
    });

    console.log(response);
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    console.log(response);

    setBooks([...books, response.data]);
  };

  return (
    <div className="app">
      <h1>Book List</h1>
      <BookList
        onUpdate={updateBookById}
        onDelete={deleteBookById}
        books={books}
      />
      <BookCreate onSubmit={createBook} />
    </div>
  );
}

export default App;
