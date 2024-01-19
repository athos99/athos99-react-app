import React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import TabLink from "./TabLink";
import { useHref } from "react-router-dom";
import { blue } from "@mui/material/colors";

export default function TabsTest() {
  const [value, setValue] = React.useState(useHref());
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        TabIndicatorProps={{
          sx: { bgcolor: blue[100] },
        }}
      >
        <TabLink href="/" value="/" label="Item One" />
        <TabLink href="/blogs" value="/blogs" label="Item Two" />
        <TabLink href="/contact" value="/contact" label="Item Three" />
      </Tabs>
    </Box>
  );
}
