import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  title: {
    flexGrow: 1
  }
};

const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" style={styles.title}>
          E-learning
        </Typography>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"> */}
        <Button color="inherit">
          <NavLink
            activeStyle={{ color: "red" }}
            exact
            to="/"
            className="nav-link"
          >
            Home
          </NavLink>
        </Button>
        {/* </li> */}
        {/* <li className="nav-item"> */}
        <Button color="inherit">
          <NavLink
            activeStyle={{ color: "red" }}
            to="/signin"
            className="nav-link"
          >
            Login
          </NavLink>
        </Button>
        {/* </li> */}
        {/* <li className="nav-item"> */}
        <Button color="inherit">
          <NavLink
            activeStyle={{ color: "red" }}
            to="/signup"
            className="nav-link"
          >
            Signup
          </NavLink>
        </Button>
        {/* </li> */}
        {/* </ul> */}
        {props.credentials && (
          <div>
            <span className="nav-link text-white">
              Hi, {props.credentials.hoTen}
            </span>
          </div>
        )}
        {/* </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default connect(state => ({
  credentials: state.user.credentials
}))(Header);
