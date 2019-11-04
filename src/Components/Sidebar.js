import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

<<<<<<< Updated upstream
import CloseIcon from '@material-ui/icons/Close';
import StatsIcon from '@material-ui/icons/Assessment';
import UserIcon from '@material-ui/icons/SupervisedUserCircle';
import LaptopIcon from '@material-ui/icons/LaptopChromebook';

import colors from '../constants/colors';
import Avatar from './Avatar';
=======
import CloseIcon from "@material-ui/icons/Close";

import colors from "../constants/colors";
import Link from "./Link";
import Avatar from "./Avatar";
>>>>>>> Stashed changes

const styles = theme => ({
  sidebar: {},
  sidebarContent: {
    padding: "10px 16px",
    "@media (min-width: 600px)": {
      padding: "10px 24px"
    }
  },
  menuButton: {
    "&.MuiButtonBase-root": {
      outline: "none",
      width: "fit-content",
      color: "red",
      margin: "5px",
      "@media (min-width: 600px)": {
        margin: "10px"
      }
    }
  },
  link: {
<<<<<<< Updated upstream
    display: 'flex',
    alignItems: 'center',
    fontSize: 25,
    textTransform: 'uppercase',
    color: 'black',
    margin: '30px 0',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
=======
    color: colors.lightPrimary,
    display: "block",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
>>>>>>> Stashed changes
    }
  },
  accountContainer: {
    display: "flex",
    alignItems: "center",
    padding: "10px 16px",
    "@media (min-width: 600px)": {
      padding: "10px 24px"
    }
  },
  username: {
    margin: "0 0 0 10px",
    fontWeight: 500
  },
  sidebarIcon: {
    width: 36,
    height: 36,
    marginRight: 20,
    color: colors.textPrimary
  }
});

const Sidebar = props => {
  const { classes, role, openDrawer } = props;
  return (
    <div className={classes.sidebar}>
      {role === "admin" && (
        <>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="open drawer"
            onClick={() => openDrawer(false)}
          >
            <CloseIcon />
          </IconButton>
          <Divider />
          <div className={classes.accountContainer}>
            <Avatar size={50} />
            {
              localStorage.getItem('userLogin') &&
              <p className={classes.username}>{JSON.parse(localStorage.getItem('userLogin')).hoTen}</p>
            }
            
          </div>
          <Divider />
          <div className={classes.sidebarContent}>
<<<<<<< Updated upstream
            <NavLink active={{ color: colors.red }} exact to='/admin' className={classes.link} onClick={() => openDrawer(false)}>
              <StatsIcon className={classes.sidebarIcon} /> Thống kê
            </NavLink>
            <NavLink active={{ color: colors.red }} exact to='/admin/users' className={classes.link} onClick={() => openDrawer(false)}>
              <UserIcon className={classes.sidebarIcon} /> Người dùng
            </NavLink>
            <NavLink active={{ color: colors.red }} exact to='/admin/courses' className={classes.link} onClick={() => openDrawer(false)}>
              <LaptopIcon className={classes.sidebarIcon}  /> Khoá học
=======
            <NavLink
              active={{ color: colors.primary }}
              exact
              to="/admin"
              className={classes.link}
              onClick={() => openDrawer(false)}
            >
              Thống kê
            </NavLink>
            <NavLink
              active={{ color: colors.primary }}
              exact
              to="/admin/users"
              className={classes.link}
              onClick={() => openDrawer(false)}
            >
              Danh sách người dùng
            </NavLink>
            <NavLink
              active={{ color: colors.red }}
              exact
              to="/admin/courses"
              className={classes.link}
              onClick={() => openDrawer(false)}
            >
              Danh sách khoá học
>>>>>>> Stashed changes
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default withStyles(styles)(Sidebar);
