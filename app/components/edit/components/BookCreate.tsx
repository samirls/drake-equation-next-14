import { ReactComponentElement, ReactElement, useState } from "react";

interface BookCreateProps {
  onCreate: (title: string) => void;
}

function BookCreate({ onCreate }: BookCreateProps) {
  const [title, setTitle] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    onCreate(title);
    setTitle('');
  };

  return (
    <div>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
