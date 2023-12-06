import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image } from "@chakra-ui/react";
import React from "react";

function Devices({onClose, isOpen}) {



  return (
    <Box>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen} size='lg'>
        <DrawerOverlay />
        <DrawerContent bg='blackAlpha.600' color='gray.100'>
          <DrawerCloseButton />
          <DrawerHeader>Availability</DrawerHeader>
          <DrawerBody display='flex' flexDir='column-reverse' justifyContent='center' alignItems='center'>
            <Image src={"/img/avaliable-all.png"} alt='phone' width={600} height='auto'/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Devices;
