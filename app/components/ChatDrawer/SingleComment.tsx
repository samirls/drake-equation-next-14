import Fetch from '@/app/lib/Fetch';
import { Box } from '@chakra-ui/react';
import {useState} from 'react'

interface SingleCommentProps {
  comment: Comment;
}

interface Comment {
  id: string;
  name: string;
  comment: string;
}

function SingleComment({comment}: SingleCommentProps) {

  return (
    <Box mb='10px'  borderRadius='9px' bg='rgba(111, 69, 153, 0.076)' padding='5px'>
      <Box>{comment.name}:</Box>
      <Box>{comment.comment}</Box>
      <Fetch/>
    </Box>
  )
}

export default SingleComment