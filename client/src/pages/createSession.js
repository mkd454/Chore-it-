import React, { Component } from "react";
import SessionContainer from '../components/sessioncontainer';

class CreateSession extends Component {
  state = {}

  render() {

    return (
      <div className="row">
        <div className="col-md-4 offset-md-4 col-xs-12">
          <SessionContainer />
        </div>
      </div>

    );
  }
}


export default CreateSession;