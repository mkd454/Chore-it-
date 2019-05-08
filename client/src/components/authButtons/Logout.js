import React from "react";

import { AuthConsumer } from "../../utils/Auth/authContext";

const Logout = () => (
  <AuthConsumer>
    {({ logout }) => (
      <button className="btn btn-sm btn-default" onClick={logout}>
        Logout
      </button>
    )}
  </AuthConsumer>
);

export default Logout;