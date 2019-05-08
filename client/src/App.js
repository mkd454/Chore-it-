import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateAccount from "./pages/createAccount";
import CreateSession from "./pages/createSession";
import SessionDetails from "./pages/sessionDetails";
import Nav from "./components/navbar";
import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import CallbackPage from "./pages/callback";
import RoommateDetails from "./pages/RoommateDetails";
import Auth from "./utils/Auth/Auth";

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <Auth>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/dashboard" component={DashboardPage}/>
              <Route path="/callback" component={CallbackPage}/>
              <Route path="/roommate/:id" component={RoommateDetails} />
            </Switch>
          </Router>
        </Auth>
      </div>
    );
  }
}

export default App;
