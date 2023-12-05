'use client'

import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Box,
  Textarea,
} from "@chakra-ui/react";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "black",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

interface TextAreaWithFloatingLabelProps {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  formLabel: string;
  placeholder: string;
  name: string;
}


function TextAreaWithFloatingLabel({onChange, value, formLabel, placeholder, name}:TextAreaWithFloatingLabelProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box p={2} display="flex" flexDir="column" gap={5}>
        <FormControl variant="floating" id="first-name">
          <Textarea
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            required
            bg='blackAlpha.500'            
          />
          <FormLabel>{formLabel}</FormLabel>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}

export default TextAreaWithFloatingLabel;
