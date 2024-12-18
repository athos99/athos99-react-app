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

const Blog = () => {
  let lines = [];
  for (let i = 0; i < 40; i++) {
    lines.push(<Item key={i}>Ligne {i}</Item>);
  }

  return (
    <Grid container spacing={2}>
      <Grid xs={8}>
        <Paper>xs=8</Paper>
      </Grid>
      {lines}
    </Grid>
  );
};

export default Blog;
