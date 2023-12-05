import { fetchComments } from "@/app/lib/data";
import { Box } from "@chakra-ui/react";

async function Fetch({}) {

  const fetchedComments = await fetchComments();

  console.log(fetchedComments)

  return (
    <Box>
    </Box>
  )
}

export default Fetch