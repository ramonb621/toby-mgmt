import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navtabs from "./components/Navtabs"
import Home from "./pages/Home";
import Employees from "./pages/Employees";
// import Logout from "./pages/Logout";
// import Profile from "./components/Profile";
import './App.css';
import Signup from "./pages/Signup";
import Login from "./pages/Login";

class App extends Component {

  state = {
    currentEmployeeId: null
  }

  componentDidMount() {

  }

  handleLinkClick = (event) => {
    // event.preventDefault();
    let id = undefined
    console.log("Clicked Handle");
    console.log("ID", event.target.id)
    if (event.target.id === undefined) {
      id = null
    } else {
      id = event.target.id
    }
    console.log(id)
    this.setState({ currentEmployeeId: id });
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" render={(props) => <Home {...props} handleLinkClick={this.handleLinkClick} />} />

            <div className="grid">
              <Route exact path="/employees" render={(props) => <Employees {...props} handleLinkClick={this.handleLinkClick} currentEmployeeId={this.state.currentEmployeeId} />} />
            </div>

          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;