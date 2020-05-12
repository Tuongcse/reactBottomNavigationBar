import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BottomNavigator from "./components/suppernicenavbar";
function Home() {
  return <section>Home</section>;
}

function Profile() {
  return <section>Profile</section>;
}

function Login() {
  return <section>Login</section>;
}

function Love() {
  return <section>Love</section>;
}

function Chart() {
  return <section>Chart</section>;
}

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
          <Route path="/chart">
            <Chart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <BottomNavigator
          routes={[
            {
              path: "/",
              name: "Home",
              icon: "fas fa-house-damage",
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
            {
              path: "/chart",
              name: "Chart",
              icon: "fas fa-chart-area",
            },
          ]}
        />
      </Router>
    );
  }
}
