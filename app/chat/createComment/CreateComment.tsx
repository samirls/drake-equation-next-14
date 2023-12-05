import { Box, Button } from "@chakra-ui/react";
import InputWithFloatingLabel from "./InputWithFloatingLabel";

function CreateComment() {
  return (
    <Box mb='20px'>
      <InputWithFloatingLabel />
      <Box display="flex" justifyContent="center" width="100%">
        <Button>Send</Button>
      </Box>
    </Box>
  );
}

export default CreateComment;
