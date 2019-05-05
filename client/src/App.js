import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateAccount from "./pages/createAccount";
import CreateSession from "./pages/createSession";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={CreateAccount} />
          <Route exact path="/session" component={CreateSession} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
