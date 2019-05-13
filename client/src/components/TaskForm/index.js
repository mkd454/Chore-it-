import React from "react";
import "./style.css";

export function TaskName(props) {
  //console.log(props);
  return (
    <div className="form-group">
      <input className="form-control" onChange={props.onChange}/>
    </div>
  );
}

export function TaskValue(props) {
  return (
  <div className="form-group">
    <input className="form-control" onChange={props.onChange}/>
  </div>
      );
}

export function TaskBtn(props) {
  return (
    <button {...props} className="btn btn-success">
      {props.children}
    </button>
  );
}