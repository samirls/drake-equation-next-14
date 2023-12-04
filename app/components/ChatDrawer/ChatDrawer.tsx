import React, { useState } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
} from "@chakra-ui/react";
import CreateComment from "./CreateComment";
import { v4 as uuidv4 } from 'uuid';
import CommentList from "./CommentList";

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Book {
  id: string;
  title: string;
}

const ChatDrawer = ({ isOpen, onClose }:ChatDrawerProps) => {

  const [comments, setComments] = useState<Comment[]>([]);

  const createBook = (name: string, comment: string) => {
    const updatedComments: Comment[] = [...comments, { id: uuidv4(), name, comment }];
    setComments(updatedComments);
  };

  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={'xl'}>
      <DrawerOverlay />
      <DrawerContent color={'whiteAlpha.800'} bg='blackAlpha.700'>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Comments <Box fontSize='1rem' fontWeight={'300'}>Share some information!</Box></DrawerHeader>
        <DrawerBody display='flex' flexDir='column' justifyContent='space-between'>
          <CommentList comments={comments} isOpen={isOpen}/>
          <CreateComment onCreate={createBook}/>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ChatDrawer;