import { Box } from "@chakra-ui/react";
import { fetchComments } from "../lib/data";
import styles from "./chat.module.css";
import CommentList from "./commentList/CommentList";
import CreateComment from "./createComment/CreateComment";
import { IoHome } from "react-icons/io5";
import Link from "next/link";

async function page() {
  const fetchedComments = await fetchComments();

  return (
    <Box
      className={styles.chat}
      color={"whiteAlpha.900"}
      pl="30px"
      pr="20px"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Box fontSize="1.8rem" pt="50px">
            Comments
          </Box>
          <Box fontSize="1.2rem">Share some information!</Box>
        </Box>
        <Link href={"/"}>
          <Box
            fontSize="1.8rem"
            pr={{base: '5px', lg:"35px"}}
            cursor="pointer"
            _hover={{ color: "gray.300" }}
          >
            <IoHome />
          </Box>
        </Link>
      </Box>
      <CommentList comments={fetchedComments} />
      <CreateComment />
    </Box>
  );
}

export default page;
