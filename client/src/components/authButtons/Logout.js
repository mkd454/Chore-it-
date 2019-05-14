import React from "react";
import "./login.css";
import { AuthConsumer } from "../../utils/Auth/authContext";

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => (
      <button id="logoutbtn" className="btn btn-sm btn-danger" onClick={logout}>
        Logout
      </button>
    )}
  </AuthConsumer>
);

export default Logout;