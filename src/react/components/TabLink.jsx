import { Tab as MuiTab } from "@mui/Tab";
import { NavLink as ReactRouterLink, useMatch } from "react-router-dom";

import React from "react";

const TabLink = (allProps) => {
  const match = useMatch(allProps.href);
  console.log(allProps.href, match ? true : false);
  return (
    <MuiTab
      {...allProps}
      component={ReactRouterLink}
      to={allProps.href ?? "#"}
      selected={match ? true : false}
    />
  );
};

export default TabLink;
