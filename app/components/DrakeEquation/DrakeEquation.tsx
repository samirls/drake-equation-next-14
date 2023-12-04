import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import styles from './DrakeEquation.module.css'
import React, {useState} from "react";
import DrawerData from "./DrawerData";
import {BsCalculator} from 'react-icons/bs'
import Joyride from "react-joyride";
import drakeEquationSteps from "../joyride/drakeEquationSteps";

interface sizeOfUniverseProps {
  goToNextPage: () => void;
  tour: boolean;
}

function DrakeEquation({goToNextPage, tour}:sizeOfUniverseProps) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const [drawerTitle, setDrawerTitle] = useState('');
  const [drawerDescription1, setDrawerDescription1] = useState('');
  const [drawerDescription2, setDrawerDescription2] = useState('');
  const [startTour, setStartTour] = useState(false);

  const fillN = () => {
    setDrawerTitle(DrawerData[0].title);
    setDrawerDescription1(DrawerData[0].description1);
    setDrawerDescription2('');
  }

  const fillR = () => {
    setDrawerTitle(DrawerData[1].title);
    setDrawerDescription1(DrawerData[1].description1);
    setDrawerDescription2('');
  }

  const fillFpNe = () => {
    setDrawerTitle(DrawerData[2].title);
    setDrawerDescription1(DrawerData[2].description1);
    setDrawerDescription2(DrawerData[2].description2 ?? '');
  }

  const fillFlFi = () => {
    setDrawerTitle(DrawerData[3].title);
    setDrawerDescription1(DrawerData[3].description1);
    setDrawerDescription2(DrawerData[3].description2 ?? '');
  }

  const fillFcL = () => {
    setDrawerTitle(DrawerData[4].title);
    setDrawerDescription1(DrawerData[4].description1);
    setDrawerDescription2(DrawerData[4].description2 ?? '');
  }

  setTimeout(() => {
    setStartTour(true);
  }, 3000);

  return (
    <>
      <Box
        fontSize= {{base:'2rem', lg:"3rem"}}
        display= "flex"
        justifyContent= "center"
        paddingTop= "15px"
        textAlign= "center"
        className="animate__animated animate__fadeInDown"
      >
        The Drake Equation
      </Box>
      <Box
        fontSize= {{base:'1.2rem', lg:"1.5rem"}}
        display= "flex"
        justifyContent= "center"
        paddingTop= "10px"
        textAlign= "center"
        className="animate__animated animate__fadeInDown"
      >
        What are the odds of being alone in the universe? Our best guess.
      </Box>
      <HStack 
        display= 'flex' 
        justifyContent= 'center' 
        marginTop= '100px' 
        id="step5"
      >
        <Box id="step6" fontSize= {{base: '1.8rem', lg: '3.3rem'}} className="animate__animated animate__zoomInLeft animate__slower"><Box as="span" className={styles.unknow} onClick={() => {onOpen(); fillN()}}>N</Box> = <Box as='span' className={styles.unknow} onClick={()=> {onOpen(); fillR()}}>R*</Box></Box>
        <Box fontSize= {{base: '1.8rem', lg: '3.3rem'}} className={`${styles.unknow} animate__animated animate__zoomInDown animate__slower`} onClick={()=> {onOpen(); fillFpNe()}}><Box as='span' fontSize={{base: '1.5rem', lg:'3rem'}} paddingRight={{base: '3px', lg:'18px'}} paddingLeft={{base: '3px', lg: '12px'}}>&#8729;</Box>f<Box as="span" fontSize={{base: '1rem', lg:'1.8rem'}}>p</Box> <Box as="span" fontSize={{base: '1.5rem', lg:'3rem'}} paddingRight= {{base: '5px', lg: '18px'}}>&#8729;</Box>n<Box as="span" fontSize={{base:'1rem', lg:'1.8rem'}}>e</Box></Box>
        <Box fontSize= {{base: '1.8rem', lg: '3.3rem'}} className={`${styles.unknow} animate__animated animate__zoomInDown animate__slower`} onClick={()=> {onOpen(); fillFlFi()}}><Box as='span' fontSize={{base: '1.5rem', lg:'3rem'}} paddingRight={{base: '3px', lg:'18px'}} paddingLeft={{base: '3px', lg: '18px'}}>&#8729;</Box>f<Box as="span" fontSize={{base: '1rem', lg:'1.8rem'}}>l</Box> <Box as="span" fontSize={{base: '1.5rem', lg:'3rem'}} paddingRight= {{base: '5px', lg: '18px'}}>&#8729;</Box>f<Box as="span" fontSize={{base:'1rem', lg:'1.8rem'}}>i</Box></Box>
        <Box fontSize= {{base: '1.8rem', lg: '3.3rem'}} className={`${styles.unknow} animate__animated animate__zoomInRight animate__slower`} onClick={()=> {onOpen(); fillFcL()}}><Box as='span' fontSize={{base: '1.5rem', lg:'3rem'}} paddingRight={{base: '3px', lg:'18px'}} paddingLeft={{base: '3px', lg: '18px'}}>&#8729;</Box>f<Box as="span" fontSize={{base: '1rem', lg:'1.8rem'}}>c</Box> <Box as="span" fontSize={{base: '1.5rem', lg:'3rem'}} paddingRight= {{base: '5px', lg: '18px'}}>&#8729;</Box>L</Box>
      </HStack>
      <Box display='flex' justifyContent='center' pt='80px' className="animate__animated animate animate__fadeIn animate__slower animate__delay-3s">
        <Button rightIcon={<BsCalculator />} onClick={goToNextPage}>Drake Calculator</Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{base: 'xs', lg:'md'}}
        
      >
        <DrawerOverlay />
        <DrawerContent color={'whiteAlpha.800'} bg='blackAlpha.900'>
          <DrawerCloseButton />
          <DrawerHeader>{drawerTitle}</DrawerHeader>
          <DrawerBody>
            <Box>{drawerDescription1}</Box>
            <Box pt='30px'>{drawerDescription2}</Box>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='link' mr={3} onClick={onClose} color='whiteAlpha.800'>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Joyride
        continuous
        run={startTour && tour}
        hideCloseButton
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={drakeEquationSteps}
        styles={{
          options: {
            arrowColor: 'gray',
            backgroundColor: "black",
            primaryColor: "#838383",
            textColor: "#ffffff",
            overlayColor: 'rgba(15, 9, 43, 0.785)',
          },
        }}
      />

    </>
  );
}

export default DrakeEquation;
