import { useState } from "react";

interface BookEditProps {
  book: Book;
  onSubmit: (id:string, newTitle:string) => void;
}

interface Book {
  id: string;
  title: string;
}

function BookEdit({book, onSubmit}:BookEditProps) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} />
      <button>Save</button>
    </form>
  );
}

export default BookEdit;
