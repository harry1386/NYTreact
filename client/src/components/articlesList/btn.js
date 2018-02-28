import React from "react";
// button functional component

export const Btn = props => (
  <button className="btn btn-success" {...props}>
     {props.children}
  </button>
);