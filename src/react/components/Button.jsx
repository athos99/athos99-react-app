import { LinkProps, Button as MuiButton } from "@mui/material";
import { NavLink as ReactRouterLink, useMatch } from "react-router-dom";

import React, { FC } from "react";

const Button = props => {
    const match = useMatch(props.href)
    console.log( props.href, match?true:false)
    return (
        <MuiButton {...props}
                   component={ReactRouterLink} to={props.href ?? "#"}
                   selected={ match?true:false}

        />
    );
};

export default Button;