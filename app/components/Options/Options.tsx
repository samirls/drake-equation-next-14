import { Box, Button, Switch } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import useStore from "../../stores/store";

interface OptionsProps {
  switchPosition: number;
  tour: boolean;
  setOptions: (newValue: boolean) => void;
  setStartTour: (newValue: boolean) => void;
  setSwitchChange: (newValue: boolean) => void;
  switchChange: boolean;
  rememberChanges: boolean;
  setRememberChanges: (newValue: boolean) => void;
}

function Options({
  switchPosition,
  tour,
  setOptions,
  setStartTour,
  setSwitchChange,
  switchChange,
  rememberChanges,
  setRememberChanges,
}: OptionsProps) {
  const setTour = useStore((state) => state.setTour);
  const setSwitchPosition = useStore((state) => state.setSwitchPosition);

  const handleRememberChanges = () => {
    if (rememberChanges === false) {
      setRememberChanges(true);
      localStorage.setItem("DrakeEquationRememberChanges", "true");
      localStorage.setItem(
        "DrakeEquationSwitchPosition",
        JSON.stringify(switchPosition)
      );
      localStorage.setItem("DrakeEquationTour", JSON.stringify(tour));
    } else {
      setRememberChanges(false);
      localStorage.removeItem("DrakeEquationRememberChanges");
      localStorage.removeItem("DrakeEquationSwitchPosition");
      localStorage.removeItem("DrakeEquationTour");
    }
  };

  const handleDisableTour = () => {
    const newDisableTour = !tour;
    setTour(newDisableTour);
    if (rememberChanges === true) {
      localStorage.setItem("DrakeEquationTour", JSON.stringify(newDisableTour));
    }
  };

  const handleSwitchChange = () => {
    if (switchPosition === 1) {
      setSwitchPosition(2);
      setSwitchChange(!switchChange);
      if (rememberChanges === true) {
        localStorage.setItem("DrakeEquationSwitchPosition", "2");
      }
    } else {
      setSwitchPosition(3);
      setTimeout(() => {
        setSwitchChange(!switchChange);
        setSwitchPosition(1);
        if (rememberChanges === true) {
          localStorage.setItem("DrakeEquationSwitchPosition", "1");
        }
      }, 500);
    }
  };

  return (
      <Box
        position="absolute"
        top={{ base: "50%", lg: "5" }}
        right={{ base: "1", lg: "5" }}
        flexDir="column"
        width="190px"
        className="animate__animated animate__fadeIn"
        background={{ base: "blackAlpha.800", lg: "blackAlpha.600" }}
        borderRadius="12px"
      >
        <Box display="flex" alignItems="center">
          <Switch
            onChange={handleSwitchChange}
            isDisabled={switchPosition === 3}
            isChecked={switchPosition === 2}
          />
          <Box pl="10px">Allow Controls</Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Switch onChange={handleDisableTour} isChecked={!tour} />
          <Box pl="10px">Disable Tour</Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Switch
            onChange={handleRememberChanges}
            isChecked={rememberChanges}
          />
          <Box pl="10px">Remember Changes</Box>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button size="xs" onClick={() => setOptions(false)}>
            Close
          </Button>
        </Box>
      </Box>
  );
}

export default Options;
