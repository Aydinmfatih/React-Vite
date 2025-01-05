import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";
function BookList({ books, onDelete, onUpdate }) {
  const { count, incrementCount } = useContext(BooksContext);
  console.log(count);
  const bookShow = books.map((book) => {
    return (
      <BookShow
        onUpdate={onUpdate}
        onDelete={onDelete}
        book={book}
        key={book.id}
      />
    );
  });

  return (
    <div className="book-list">
      {bookShow}
      {count}
      <button onClick={incrementCount}></button>
    </div>
  );
}

export default BookList;
