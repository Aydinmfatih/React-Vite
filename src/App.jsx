import {  useEffect, useContext } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import BooksContext from "./context/books";
import useBooksContext  from "./hooks/use-books-context";

function App() {
 const {fetchBooks} = useBooksContext();
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Book List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
