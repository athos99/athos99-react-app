import React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import TabLink from "./TabLink";

export default function TbasTest() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange}>
        <TabLink value="one" href="/" label="Item One" />
        <TabLink value="two" href="/blogs" label="Item Two" />
        <TabLink value="three" href="/contact" label="Item Three" />
      </Tabs>
    </Box>
  );
}
