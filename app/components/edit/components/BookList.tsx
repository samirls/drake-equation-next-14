import BookShow from "./BookShow"


interface Book {
  id: string;
  title: string;
}

interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void; 
  onEdit: (id: string, newTitle: string) => void;
}


function BookList({books, onDelete, onEdit}:BookListProps) {

  const renderedBooks = books.map((book) => {
    return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book}/>
  })

  return (
    <div>{renderedBooks}</div>
  )
}

export default BookList