import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import React from "react";
import "../css/_header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="container">
          <div className="row menu">
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 sub_nav">
              <ul className="nav">
                <li className="nav-item">
                  <NavLink
                    activeClassName="true"
                    exact
                    className="nav-link"
                    to="/"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="true"
                    className="nav-link"
                    to="/danhsachkhoahoc"
                  >
                    COURSES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="true"
                    className="nav-link"
                    to="/blog"
                  >
                    BLOG
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="true"
                    className="nav-link"
                    to="/events"
                  >
                    EVENTS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="true"
                    className="nav-link"
                    to="/about"
                  >
                    ABOUT
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 d-flex menu__right">
              <div className="signin">
                <Link to="/signin">
                  <button> LOG IN </button>
                </Link>
              </div>
              <div className="signup">
                <Link to="/signup">
                  <button> SIGN UP </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
