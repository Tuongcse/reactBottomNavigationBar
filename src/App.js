import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigator from "./components/suppernicenavbar";
import Home from "./pages/Home";
import Love from "./pages/Love";
import Login from "./pages/Register";
import Profile from "./pages/Profile";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/me">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/love">
            <Love />
          </Route>
          {/* <Route path="/chart">
            <Chart />
          </Route> */}
          <Route path="/">
            <Home headerRef={(el) => (this.homeHeader = el)} />
          </Route>
        </Switch>
        <BottomNavigator
          routes={[
            {
              path: "/",
              name: "Discovery",
              icon: "far fa-compass",
            },
            {
              path: "/me",
              name: "Profile",
              icon: "far fa-id-card",
            },
            {
              path: "/love",
              name: "Love",
              icon: "fas fa-heartbeat",
            },
            {
              path: "/login",
              name: "Register",
              icon: "fab fa-artstation",
            },
            // {
            //   path: "/chart",
            //   name: "Chart",
            //   icon: "fas fa-chart-area",
            // },
          ]}
        />
      </Router>
    );
  }
}
