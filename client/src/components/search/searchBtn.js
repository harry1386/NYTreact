import React from "react";
// button functional component

export const searchBtn = props => (
  <button className="btn btn-success" {...props}>
     {props.children}
  </button>
);