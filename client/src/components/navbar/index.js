import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
  state = {}

  render() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/session">Sessions</Link>
        </li>
      </ul>
    )
  }
}

export default Nav;