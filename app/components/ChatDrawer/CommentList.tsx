import { Box, ChakraProvider } from "@chakra-ui/react";
import SingleComment from "./SingleComment";
//import { useEffect, useRef } from "react";


interface Comment {
  id: string;
  name: string;
  comment: string;
}

interface CommentListProps {
  comments: Comment[];
  isOpen: boolean;
}

function CommentList({ comments, isOpen }: CommentListProps) {

  //const boxRef = useRef<HTMLDivElement>(null);

  const renderedComments = comments.map((comment) => {
    return <SingleComment key={comment.id} comment={comment} />;
  });


/*   useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [comments, isOpen]); */

  return (
    <ChakraProvider>
      <Box
        //ref={boxRef}
        maxHeight="500px"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "9px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#9d9d9d",
            borderRadius: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#E2E8F0",
            borderRadius: "6px",
          },
        }}
      >
        {renderedComments}
      </Box>
    </ChakraProvider>
  );
}

export default CommentList;
