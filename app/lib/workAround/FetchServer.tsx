import { fetchComments } from "@/app/lib/data";
import { Box } from "@chakra-ui/react";
import FetchClient from "./FetchClient";


async function Fetch() {

  const fetchedComments = await fetchComments();

  console.log(fetchedComments)

  return (
    <Box>
      <FetchClient fetchedComments={fetchedComments}/>
    </Box>
  )
}

export default Fetch