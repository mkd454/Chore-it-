import React from "react";
import "./style.css";

export function GroupName(props) {
  //console.log(props);
  return (
    <div className="form-group">
      <input className="form-control" onChange={props.onChange}/>
    </div>
  );
}

export function GroupNameBtn(props) {
  return (
    <button {...props} className="btn btn-success">
      {props.children}
    </button>
  );
}