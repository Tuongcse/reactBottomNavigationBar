import React from "react";
import { Link } from "react-router-dom";

export default class BottomNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoute: window.location.pathname,
    };
  }
  navClass(route) {
    return this.state.activeRoute === route ? "nav-item active" : "nav-item";
  }
  setPosition() {
    let { routes } = this.props;
    let idx = routes.findIndex(
      (route) => route.path === this.state.activeRoute
    );
    let itemWidth = (window.innerWidth - 20) / routes.length;
    return { left: `${6 + itemWidth * (idx + 0.5)}px` };
  }
  setActiveRoute(route) {
    return () =>
      this.setState({
        activeRoute: route,
      });
  }
  render() {
    let routes = this.props.routes.map((route) => (
      <div
        key={route.name}
        className={this.navClass(route.path)}
        onClick={this.setActiveRoute(route.path)}
      >
        <Link to={route.path}>
          <div className="nav-icon">
            <i className={route.icon}></i>
          </div>
          <div className="nav-link">{route.name}</div>
        </Link>
      </div>
    ));
    return (
      <nav className="navbar">
        {routes}
        <span className="navbar-pointer" style={this.setPosition()}></span>
      </nav>
    );
  }
}
