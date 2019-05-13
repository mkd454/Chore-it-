import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";

function Card() {
  return (
    <div id="LoginPage" className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div className=" col-2 col-lg-4 col-md-2"></div>
          <p className="text-center h1 mb-4 mt-4" id="GroupHeader">Chore-It!</p>
        <div className="col-2 col-lg-4"></div>
      </div>
      <div className="row">
        <div className="col-2 col-lg-4 col-md-2"></div>
        <div className="col-8 col-lg-4 col-md-8">
          <Link className="buttonLink" to="/group/create">
            <button type="button" id="create-group" className="btn btn-lg btn-block pl-4 mb-4 pr-4">Create Group</button>
          </Link>
        </div>
        <div className="col-2 col-lg-4 col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-2 col-lg-4 col-md-2"></div>
        <div className="col-8 col-lg-4 col-md-8">
          <Link class="buttonLink" to="/group/join">
            <button type="button" id="join-group" className="btn btn-lg btn-block pl-4 pr-4">Join Group</button>
          </Link>
        </div>
        <div className="col-2 col-lg-4 col-md-2"></div>
      </div>
    </div>
  )
}

export default Card;
