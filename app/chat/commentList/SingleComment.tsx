import Fetch from '@/app/lib/workAround/FetchServer';
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
    <Box mb='10px'  borderRadius='9px' bg='rgba(111, 69, 153, 0.143)' padding='5px'>
      <Box fontWeight={600} color='white'>{comment.name}:</Box>
      <Box>{comment.comment}</Box>
    </Box>
  )
}

export default SingleComment