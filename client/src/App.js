import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateAccount from "./pages/createAccount";
import CreateSession from "./pages/createSession";
import SessionDetails from "./pages/sessionDetails";
import Nav from "./components/navbar";
import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import CallbackPage from "./pages/callback";
import Auth from "./components/Auth";

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Auth>
          <div className="jumbotron">
            <Router>
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/dashboard" component={DashboardPage}/>
                <Route path="/callback" component={CallbackPage}/>
              </Switch>
            </Router>
          </div>
        </Auth>
      </div>
      // <Router>
      //   <div>
      //     <Nav />
      //     <Switch>
      //       <Route exact path="/" component={CreateAccount} />
      //       <Route exact path="/session" component={CreateSession} />
      //       <Route path="/session/:id" component={SessionDetails} />
      //     </Switch>
      //   </div>
      // </Router>
    );
  }
}

export default App;
