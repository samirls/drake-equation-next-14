'use client'

import { Box, ChakraProvider } from "@chakra-ui/react";
import SingleComment from "./SingleComment";
import { useEffect, useRef, useState } from "react";


interface Comment {
  id: string;
  name: string;
  comment: string;
}

interface CommentListProps {
  comments: Comment[];
}


function CommentList({ comments }: CommentListProps) {

  const boxRef = useRef<HTMLDivElement>(null);

  const renderedComments = comments.map((comment) => {
    return <SingleComment key={comment.id} comment={comment} />;
  });


  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollTop = boxRef.current.scrollHeight;
    }
  }, [comments]); 

  return (
    <ChakraProvider>
      <Box
        ref={boxRef}
        mt='50px'
        minHeight='50vh'
        maxHeight="50vh"
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
