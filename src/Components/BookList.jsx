import BookShow from "./BookShow";
import useBooksContext  from "../hooks/use-books-context";


function BookList() {
  const { books } = useBooksContext();
  console.log(books);
  const bookShow = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });

  return <div className="book-list">{bookShow}</div>;
}

export default BookList;
