import React from "react";
import { Outlet, useHref } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import styled from "@mui/material/styles/styled";
import TabsTest from "./../components/TabsTest";
import CssBaseline from "@mui/material/CssBaseline";
//import Link from "./../../components/Link";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    //    mode: "dark",
    //    primary: {
    //      main: "#1976d2",
    //},
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
  //  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
  //  const [anchorElNav, setAnchorElNav] = React.useState(true);
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography>News</Typography>
            <TabsTest />
          </Toolbar>
        </AppBar>
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Layout;
