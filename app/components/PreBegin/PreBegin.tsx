"use client";

import React, { useState, useEffect } from "react";
import Begin from "../Begin/Begin";
import { Box, useDisclosure } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import SizeOfUniverse from "../SizeOfUniverse/SizeOfUniverse";
import "animate.css";
import DrakeEquation from "../DrakeEquation/DrakeEquation";
import DrakeCalculator from "../DrakeCalculator/DrakeCalculator";
import Controls from "../Controls/Controls";
import { FaGear } from "react-icons/fa6";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import useStore from "@/app/stores/store";
import Options from "@/app/components/Options/Options";
import styles from "./preBegin.module.css";
import Link from "next/link";

function PreBegin() {
  const [switchChange, setSwitchChange] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [startTour, setStartTour] = useState(false);
  const [options, setOptions] = useState(false);
  const [rememberChanges, setRememberChanges] = useState(false);
  const switchPosition = useStore((state) => state.switchPosition);
  const setSwitchPosition = useStore((state) => state.setSwitchPosition);
  const tour = useStore((state) => state.tour);
  const setTour = useStore((state) => state.setTour);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    const storedRememberChanges = localStorage.getItem(
      "DrakeEquationRememberChanges"
    );
    const storedSwitchPosition = localStorage.getItem(
      "DrakeEquationSwitchPosition"
    );
    const storedDisableTour = localStorage.getItem("DrakeEquationTour");
    if (storedRememberChanges === "true") {
      setRememberChanges(true);
    }
    if (storedSwitchPosition !== null) {
      setSwitchPosition(Number(storedSwitchPosition));
    }
    if (storedSwitchPosition === "2") {
      setSwitchChange(true);
    }
    if (storedDisableTour === "false") {
      setTour(false);
    }
  }, []);

  setTimeout(() => {
    setStartTour(true);
  }, 1500);

  return (
    <ChakraProvider theme={theme}>
      <Box className={styles.PreBegin}>
        {currentPage === 1 && <Begin goToNextPage={goToNextPage} />}
        {currentPage === 2 && (
          <SizeOfUniverse goToNextPage={goToNextPage} tour={tour} />
        )}
        {currentPage === 3 && (
          <DrakeEquation goToNextPage={goToNextPage} tour={tour} />
        )}
        {currentPage === 4 && <DrakeCalculator tour={tour} />}
        {options === true ? (
          <>
            <Options
              switchPosition={switchPosition}
              tour={tour}
              setOptions={setOptions}
              setStartTour={setStartTour}
              switchChange={switchChange}
              setSwitchChange={setSwitchChange}
              rememberChanges={rememberChanges}
              setRememberChanges={setRememberChanges}
            />
          </>
        ) : (
          <>
            <Box
              position="absolute"
              top={{ base: "50%", lg: "5" }}
              right={{ base: "1", lg: "5" }}
              flexDir="column"
              cursor="pointer"
              fontSize="25px"
              onClick={() => setOptions(true)}
              className={
                options === false ? "animate__animated animate__fadeIn" : ""
              }
              id="step1"
              _hover={{ color: "gray.300" }}
            >
              <FaGear />
            </Box>
            <Link href="/chat">
              <Box
                position="absolute"
                top={{ base: "40%", lg: "5" }}
                right={{ base: "1", lg: "90" }}
                flexDir="column"
                cursor="pointer"
                fontSize="25px"
                className={
                  options === false ? "animate__animated animate__fadeIn" : ""
                }
                id="step1"
                _hover={{ color: "gray.300" }}
              >
                <BsFillChatLeftTextFill />
              </Box>
            </Link>
          </>
        )}

        {switchChange && (
          <Controls
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
            switchPosition={switchPosition}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Box>
    </ChakraProvider>
  );
}

export default PreBegin;
