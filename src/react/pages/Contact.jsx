import React from "react";
import Button from "./../components/Button";
import Box from "@mui/material/Box";

const Contact = () => {
  return (
    <div>
      <h1>Contact Me</h1>
      <Box>
        <Button href="/">Home</Button>
        <Button href="/blogs">Blog</Button>
        <Button href="/contact">Contact</Button>
      </Box>
    </div>
  );
};

export default Contact;
