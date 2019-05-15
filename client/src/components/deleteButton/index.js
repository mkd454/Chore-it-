import React from "react";

const btnStyle = {
  float: "right",
  marginLeft: "20px"
}

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteButton(props) {
  return (
    < {...props} className="btn btn-danger" role="button" tabIndex="0" style={btnStyle}>✘</button>
  );
}

export default DeleteButton;
