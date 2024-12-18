import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Unstable_Grid2";

const rows = [
  {
    id: 1,
    username: "toto001",
    age: 38,
    desk: "D-546",
  },
  {
    id: 2,
    username: "bond003",
    age: 25,
    desk: "D-044",
  },
];

export default function MonChange() {
  return (
    <Grid container spacing={10}>
      <Grid xs={12}>
        <DataGrid
          columns={[
            { field: "id" },
            { field: "username", hideable: false },
            { field: "age" },
            { field: "desk" },
          ]}
          rows={rows}
        />
      </Grid>
    </Grid>
  );
}
