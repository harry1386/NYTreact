import React from "react";
// button functional component

export const btn = props => (
  <button className="btn btn-success" {...props}>
     {props.children}
  </button>
);