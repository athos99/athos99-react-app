import React from "react";
import { Outlet, useHref } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabsTest from "./../components/TabsTest";

//import Link from "./../../components/Link";
import Button from "./../components/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    //mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            background: "#f3f3f3",
            color: "#dadada",
          },
        },
      },
    },
  },
});
const Layout = () => {
  console.log("layout" + useHref());
  //  const [anchorElNav, setAnchorElNav] = React.useState(true);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <br />
        <AppBar position="static">
          <Toolbar>
            <Typography>News</Typography>
            <TabsTest />
            <Box>
              <Button href="/">Home</Button>
              <Button href="/blogs">Blog</Button>
              <Button href="/contact">Contact</Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Button href="/">Home</Button>
        <Button href="/blogs">blog</Button>
        <Button href="/contact">contact</Button>
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Layout;
