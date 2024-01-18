import { Tab as MuiTab } from "@mui/material";
import { NavLink as ReactRouterLink, useMatch } from "react-router-dom";

import React from "react";

const TabLink = (allProps) => {
  const match = useMatch(allProps.href);
  console.log("TabLink " + allProps.href, allProps);
  const myProps = allProps 
  myProps.value = allProps.href;
  allProps.value = allProps.href
  
  //console.log("tablink " + allProps.href, match ? true : false);
  return (
    <MuiTab
      component={ReactRouterLink}
      to={allProps.href ?? "#"}
      selected={match ? true : false}
      {...myProps}
    />
  );
};

export default TabLink;
