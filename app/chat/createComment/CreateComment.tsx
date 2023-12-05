"use client";

import { Box, Button } from "@chakra-ui/react";
import InputWithFloatingLabel from "../../components/Utils/InputWithFloatingLabel";
import { createComment } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { useState } from "react";
import TextAreaWithFloatingLabel from "@/app/components/Utils/TextAreaWithFloatingLabel";
import { ChangeEvent, FormEvent } from "react";

function CreateComment() {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Your form submission logic here
    await createComment(formData);

    // Clear the form after submission
    setFormData({
      name: "",
      comment: "",
    });
  };

  return (
    <Box mb="20px">
      <form
        onSubmit={handleSubmit}
      >
        <InputWithFloatingLabel
          onChange={handleChange}
          value={formData.name}
          formLabel={"Name"}
          placeholder={"John"}
          name={"name"}
        />
        <TextAreaWithFloatingLabel
          onChange={handleChange}
          value={formData.comment}
          formLabel={"Write some cool stuff here"}
          placeholder={"Your comment"}
          name={"comment"}
        />
        <Box display="flex" justifyContent="center" width="100%">
          <Button type="submit">Send</Button>
        </Box>
      </form>
    </Box>
  );
}

export default CreateComment;
