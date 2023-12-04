import { Box } from "@chakra-ui/react";
import React from "react";
import {BsCircle, BsCircleFill} from 'react-icons/bs';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'

interface ControlsProps{
  goToPreviousPage: () => void,
  goToNextPage: () => void,
  switchPosition: number,
  currentPage: number,
  setCurrentPage: (number: number) => void
}

function Controls({goToPreviousPage, goToNextPage, switchPosition, currentPage, setCurrentPage}:ControlsProps) {


  return (
    <Box>
      <Box display="flex" justifyContent='center' alignItems='center' position='fixed' width='100%' bottom='5' gap='3' className={switchPosition === 2 ? "animate__animated animate__bounceInUp" : "animate__animated animate__bounceOutDown"} >
        <FaArrowCircleLeft fontSize='1.6rem' cursor='pointer' onClick={goToPreviousPage}/>
        <Box display="flex" fontSize='0.8rem' gap='1'>
          <BsCircle cursor='pointer' onClick={() => setCurrentPage(1)} style={{background: currentPage === 1 ? "lightgray" : "transparent", borderRadius: '50%'}}/>
          <BsCircle cursor='pointer' onClick={() => setCurrentPage(2)} style={{background: currentPage === 2 ? "lightgray" : "transparent", borderRadius: '50%'}}/>
          <BsCircle cursor='pointer' onClick={() => setCurrentPage(3)} style={{background: currentPage === 3 ? "lightgray" : "transparent", borderRadius: '50%'}}/>
          <BsCircle cursor='pointer' onClick={() => setCurrentPage(4)} style={{background: currentPage === 4 ? "lightgray" : "transparent", borderRadius: '50%'}}/>
        </Box>
        <FaArrowCircleRight fontSize='1.6rem' cursor='pointer' onClick={goToNextPage}/>
      </Box>
    </Box>
  );
}

export default Controls;
