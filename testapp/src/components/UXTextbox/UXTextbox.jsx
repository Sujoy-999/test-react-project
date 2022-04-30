import React from "react";
import "./UXTextbox.css";

const UXTextbox = (props) => {
  return (
    <input
      type="text"
      className={props.variant && props.variant}
      value={props.value && props.value}
      onChange={(e) => props.onEdit(e.target.value)}
    ></input>
  );
};

export default UXTextbox;
