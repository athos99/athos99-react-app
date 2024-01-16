import { Button as MuiButton } from "@mui/material";
import { NavLink as ReactRouterLink, useMatch } from "react-router-dom";

import React from "react";

const Button = (prop) => {
  const match = useMatch(prop.href);
  console.log(prop, match ? true : false);
  return (
    <MuiButton
      {...prop}
      component={ReactRouterLink}
      to={prop.href ?? "#"}
      selected={match ? true : false}
    />
  );
};

export default Button;
