import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

function Card() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4"></div>
        <form className="m-5 p-5 col-4 loginBackground">

          <p className="text-center h1 mb-4" id="GroupHeader">Hello World!</p>
          <Link to="/group/create">
            <button type="button" id="create-group" className="btn btn-primary pl-4 mb-4 pr-4 d-flex justify-content-center">Create Group</button>
          </Link>
          <button type="button" id="join-group" className="btn btn-primary pl-4 pr-4 d-flex justify-content-center">Join Group</button>
        </form>
        <div className="col-4"></div>
      </div>
    </div>
  )
}

export default Card;
