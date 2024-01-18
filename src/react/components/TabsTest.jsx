import React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import TabLink from "./TabLink";
import { useHref } from "react-router-dom";

export default function TabsTest() {
  const [value, setValue] = React.useState(useHref());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log("Tabtest" + value);
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange}>
        <TabLink href="/" label="Item One" />
        <TabLink href="/blogs" label="Item Two" />
        <TabLink href="/contact" label="Item Three" />
      </Tabs>
    </Box>
  );
}
