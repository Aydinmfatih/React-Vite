import BookShow from "./BookShow";

function BookList({ books , onDelete ,onUpdate}) {
  const bookShow = books.map((book) => {
    return (
      <BookShow onUpdate={onUpdate} onDelete={onDelete} book={book} key={book.id} />
    );
  });

  return <div className="book-list">{bookShow}</div>;
}

export default BookList;
