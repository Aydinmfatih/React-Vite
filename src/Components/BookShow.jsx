function BookShow({ book, onDelete }) {
  const handleClick = () => {
    onDelete(book.id);
    console.log(book.id);
  };
  return (
    <>
      <div className="book-show">
        {book.title}
        <div className="actions"></div>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </>
  );
}

export default BookShow;
