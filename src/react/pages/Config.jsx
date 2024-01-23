import { React, useState } from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material/styles";
import MonTableau from "./rubriques/MonTableau";

const drawerWidth = "180px";

const Config = () => {
  const [rubrique, setRubrique] = useState("");
  const theme = useTheme();

  const handleClick = (name) => {
    setRubrique(name);
  };

  console.log(theme.mixins.toolbar);
  let lines = [];
  for (let i = 0; i < 40; i++) {
    lines.push(
      <p key={i}>
        Ligne {i} ......................................................
      </p>,
    );
  }
  let content = "";
  switch (rubrique) {
    case "mail":
      content = <h1>Mail</h1>;
      break;
    case "inbox":
      content = <MonTableau />;
      break;
    default:
      content = <h1>....</h1>;
      break;
  }
  return (
    <>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            top: "initial",
            width: drawerWidth,
          },
        }}
      >
        <Divider />
        <List>
          <ListItem>
            <ListItemButton onClick={() => handleClick("inbox")}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => handleClick("mail")}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="mail" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        sx={{
          left: drawerWidth,
          position: "relative",
          "margin-left": theme.spacing(2),
        }}
      >
        {content}
        {lines}
      </Box>
    </>
  );
};

export default Config;
