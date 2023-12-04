import { Box, Button } from "@chakra-ui/react";

import { ReactComponentElement, ReactElement, useState } from "react";
import InputWithFloatingLabel from "./InputWithFloatingLabel";





interface CreateCommentProps {
  onCreate: (title: string) => void;
}

function CreateComment({ onCreate }: CreateCommentProps) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    onCreate(name, comment);
    setName("");
    setComment("");
  };

  return (
    <Box>
        <InputWithFloatingLabel name={name} comment={comment} handleNameChange={handleNameChange} handleCommentChange={handleCommentChange}/>
        <Box display='flex' justifyContent='center' width='100%'>
          <Button onClick={handleSubmit}>Send</Button>
        </Box>
    </Box>
  );
}

export default CreateComment;
