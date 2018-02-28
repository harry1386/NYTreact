import React from "react";
//functional component that lists the articls

export const item = props =>
    <li className= "list-group-item">
        {props.children}
    </li>;