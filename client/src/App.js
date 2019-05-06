import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateAccount from "./pages/createAccount";
import CreateSession from "./pages/createSession";
import SessionDetails from "./pages/sessionDetails";
import Nav from './components/navbar';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={CreateAccount} />
          <Route exact path="/session" component={CreateSession} />
          <Route path="/session/:id" component={SessionDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
