import {useState} from 'react'
import BookEdit from './BookEdit';

interface BookShowProps {
  book: Book;
  onDelete: (id:string) => void;
  onEdit: (id:string, newTitle: string) => void;
}

interface Book {
  id: string;
  title: string;
}

function BookShow({book, onDelete, onEdit}: BookShowProps) {

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = (id:string, newTitle:string) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  }

  let content = <h3>{book.title}</h3>;
  if(showEdit){
    content = <BookEdit onSubmit={handleSubmit} book={book}/>
  }

  return (
    <div>
      <div>{content}</div>
      <div>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow