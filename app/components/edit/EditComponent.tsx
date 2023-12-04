import { useState } from "react";
import styles from "./EditComponent.module.css";
import BookCreate from "./components/BookCreate";
import { v4 as uuidv4 } from 'uuid';
import BookList from "./components/BookList";

interface Book {
  id: string;
  title: string;
}

function EditComponent() {
  const [books, setBooks] = useState<Book[]>([]);

  const editBookById = (id:string, newTitle:string) => {
    const updatedBooks = books.map((book) => {
      if(book.id === id){
        return {...book, title: newTitle};
      }
      return book
    })

    setBooks(updatedBooks);
  }

  const deleteBookById = (id: string) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  }

  const createBook = (title: string) => {
    const updatedBooks: Book[] = [...books, { id: uuidv4(), title }];
    setBooks(updatedBooks);
  };

  return (
    <div className={styles.all}>
      <BookCreate onCreate={createBook} />
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
    </div>
  );
}

export default EditComponent;
