import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

const Item = ({ children }) => {
  return (
    <Grid xs={2}>
      <Paper>{children}</Paper>
    </Grid>
  );
};

export default function MaGrille() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Paper>xs=8</Paper>
        </Grid>
        <Item>Ligne 1</Item>
        <Item>Ligne 2</Item>
      </Grid>
    </Box>
  );
}
