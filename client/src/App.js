import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import CallbackPage from "./pages/callback";
import RoommateDetails from "./pages/RoommateDetails";
import Auth from "./utils/Auth/Auth";
import CreateGroup from "./pages/createGroup"
import JoinGroup from "./pages/joinGroup"
import InGroup from "./pages/inGroup"
import AddTask from "./pages/addTask"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Auth>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/dashboard" component={DashboardPage}/>
              <Route path="/callback" component={CallbackPage}/>
              <Route path="/roommate/:id" component={RoommateDetails} />
              <Route exact path="/group/create" component={CreateGroup} />
              <Route exact path="/group/join" component={JoinGroup} />
              <Route path="/addtask" component={AddTask} />
            </Switch>
          </Router>
        </Auth>
      </div>
    );
  }
}

export default App;
