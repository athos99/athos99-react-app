import { Button as MuiButton } from "@mui/material";
import { NavLink as ReactRouterLink, useMatch } from "react-router-dom";
import React from "react";
const Button = (allProps) => {
  const match = useMatch(allProps.href);
  return (
    <MuiButton
      {...allProps}
      component={ReactRouterLink}
      to={allProps.href ?? "#"}
      selected={match ? true : false}
    />
  );
};
export default Button;
