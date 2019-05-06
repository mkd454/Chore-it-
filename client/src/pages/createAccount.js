import React, { Component } from "react";
import AccountForm from '../components/accountform';

class CreateAccount extends Component {
  state = {}

  render() {

    return (
      <div>
        <h1 className="text-center">RoomHate</h1>
        <AccountForm/>
      </div>
    );
  }
}


export default CreateAccount;