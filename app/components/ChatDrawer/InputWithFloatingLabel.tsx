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

interface InputProps {
  name: string;
  comment: string;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCommentChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function InputWithFloatingLabel({
  name,
  comment,
  handleNameChange,
  handleCommentChange,
}: InputProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box p={2} display="flex" flexDir="column" gap={5}>
        <FormControl variant="floating" id="first-name">
          <Input placeholder="John" value={name} onChange={handleNameChange} />
          <FormLabel>Your Name</FormLabel>
        </FormControl>
        <FormControl variant="floating" id="first-name">
          <Textarea
            placeholder="Your comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <FormLabel>Write some cool stuff here</FormLabel>
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}

export default InputWithFloatingLabel;
