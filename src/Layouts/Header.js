import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to='/'>
        E-learning
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "red" }}
              exact
              to="/"
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "red" }}
              to="/signin"
              className="nav-link"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={{ color: "red" }}
              to="/signup"
              className="nav-link"
            >
              Signup
            </NavLink>
          </li>
        </ul>
        {props.credentials && (
          <div>
            <span className="nav-link text-white">
              Hi, {props.credentials.hoTen}
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default connect(state => ({
  credentials: state.user.credentials
}))(Header);
