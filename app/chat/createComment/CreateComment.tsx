import { Box, Button } from "@chakra-ui/react";
import InputWithFloatingLabel from "./InputWithFloatingLabel";
import { createComment } from "@/app/lib/actions";
import { useFormState } from "react-dom";

function CreateComment() {

  

  return (
    <Box mb="20px">
      <form action={createComment}>
        <InputWithFloatingLabel />
        <Box display="flex" justifyContent="center" width="100%">
          <Button type="submit">Send</Button>
        </Box>
      </form>
    </Box>
  );
}

export default CreateComment;
