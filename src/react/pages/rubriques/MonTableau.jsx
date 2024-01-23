import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

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
    desk: "D-042",
  },
];

export default function MonTableau() {
  return (
    <div style={{ height: 250, width: "100%" }}>
      <DataGrid
        columns={[
          { field: "login", hideable: false },
          { field: "age" },
          { field: "desk" },
        ]}
        rows={rows}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
