import {
  Box,
  Button,
  Image,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import styles from "./SizeOfUniverse.module.css";
import { Navigation } from "swiper/modules";
import { EffectCube } from "swiper/modules";
import "animate.css";
import { TfiNewWindow } from "react-icons/tfi";
import { HiArrowRight } from "react-icons/hi";
import slidesData from "./slidesData";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import { TbCircleChevronLeft, TbCircleChevronRight } from "react-icons/tb";
import Joyride from "react-joyride";
import sizeOfUniverseSteps from '../joyride/sizeOfUniverseSteps'

interface sizeOfUniverseProps {
  goToNextPage: () => void;
  tour: boolean;
}

function SizeOfUniverse({ goToNextPage, tour }: sizeOfUniverseProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubTitle, setModalSubTitle] = useState("");
  const [src, setSrc] = useState("");
  const [about, setAbout] = useState("");
  const [slidesDataIndex, setSlidesDataIndex] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [startTour, setStartTour] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      goToNextPage();
    }, 800);
  };

  const handleNextSlide = () => {
    const nextIndex = slidesDataIndex + 1;

    if (nextIndex < slidesData.length) {
      setSlidesDataIndex(nextIndex);
      setModalTitle(slidesData[nextIndex].title);
      setModalSubTitle(slidesData[nextIndex].subTitle);
      setAbout(slidesData[nextIndex].about);
      setSrc(slidesData[nextIndex].src);
    }
  };

  const handlePreviousSlide = () => {
    const previousIndex = slidesDataIndex - 1;

    if (previousIndex >= 0) {
      setSlidesDataIndex(previousIndex);
      setModalTitle(slidesData[previousIndex].title);
      setModalSubTitle(slidesData[previousIndex].subTitle);
      setAbout(slidesData[previousIndex].about);
      setSrc(slidesData[previousIndex].src);
    }
  };

  setTimeout(() => {
    setStartTour(true);
  }, 2000);

  return (
    <Box>
      <h1
        style={{
          fontSize: "2.5rem",
          display: "flex",
          justifyContent: "center",
          paddingTop: "15px",
          textAlign: "center",
        }}
        className={
          fadeOut
            ? "animate__animated animate__fadeOutUp"
            : "animate__animated animate__fadeInDown"
        }
      >
        The size of the Universe
      </h1>
      <Box 
        fontSize= "1.3rem" 
        display= {{base: "none", lg:"flex"}}
        justifyContent= "center"
        paddingTop= "15px"
        className={
          fadeOut
            ? "animate__animated animate__fadeOutUp"
            : "animate__animated animate__fadeInDown"
        }
      >
        Click for more info
      </Box>
      <Box className={fadeOut ? "animate__animated animate__fadeOut" : ""}>
        <Box
          paddingTop= {{base:"30px", lg:"80px"}}
          className="animate__animated animate__fadeIn"
        >
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 1.75,
            }}
            navigation={true}
            modules={[EffectCube, Navigation]}
            className={styles.swiper}
            onSlideChange={(swiper: any) => {
              //console.log(swiper.activeIndex);
            }}
            id="step3"
          >
            {slidesData.map((item, index) => {
              return (
                <SwiperSlide key={index} className={styles.swiper_slide}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    onClick={() => {
                      onOpen();
                      setModalTitle(item.title);
                      setModalSubTitle(item.subTitle);
                      setAbout(item.about);
                      setSrc(item.src);
                      setSlidesDataIndex(index);
                    }}
                  />
                </SwiperSlide>
              );
            })}

            <Modal onClose={onClose} isOpen={isOpen}>
              <ModalOverlay />
              <ModalContent sx={{ background: "black" }} maxW="80%">
                <ModalHeader sx={{ display: "flex", justifyContent: "center" }}>
                  {modalTitle}
                </ModalHeader>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  {modalSubTitle}
                </Box>
                <ModalCloseButton />
                <ModalBody
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDir: "column",
                  }}
                >
                  <Img src={src} />
                  <Box>{about}</Box>
                  <div className={styles.chevronContainer}>
                    <TbCircleChevronLeft
                      onClick={handlePreviousSlide}
                      className={styles.chevronLeft}
                    />
                    <TbCircleChevronRight
                      onClick={handleNextSlide}
                      className={styles.chevronRight}
                    />
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Swiper>

          <Box sx={{ display: "flex", justifyContent: "center" }} >
            <Button
              marginTop= {{base:"20px", lg:"50px"}}
              rightIcon={<HiArrowRight />}
              onClick={handleClick}
              id="step4"
            >
              Drake Equation
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent= "center"
          alignItems= "center"
          paddingTop= "5px"
          gap= "5px"
          position= {{base: "static", lg:"absolute"}}
          pt={{base:"10px", lg: '0px'}}
          bottom= "3"
          right= "3"
          className="animate__animated animate__fadeIn"
        >
          Source:
          <a
            href="http://www.atlasoftheuniverse.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.linkHover}
          >
            http://www.atlasoftheuniverse.com/
          </a>
          <TfiNewWindow />
        </Box>
        <Joyride
          continuous
          run={startTour && tour}
          hideCloseButton
          scrollToFirstStep
          showProgress
          showSkipButton
          steps={sizeOfUniverseSteps}
          styles={{
            options: {
              arrowColor: "gray",
              backgroundColor: "black",
              primaryColor: "#838383",
              textColor: "#ffffff",
              overlayColor: "rgba(15, 9, 43, 0.785)",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default SizeOfUniverse;
