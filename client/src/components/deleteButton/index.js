import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteButton(props) {
  return (
    <button type="button" {...props} className="btn btn-danger" role="button" tabIndex="0" style={btnStyle}>✘</button>
  );
}

export default DeleteButton;
