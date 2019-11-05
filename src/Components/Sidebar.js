import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import colors from "../constants/colors";
import Link from "./Link";
import Avatar from "./Avatar";

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
    color: colors.lightPrimary,
    display: "block",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
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
            {localStorage.getItem("userLogin") && (
              <p className={classes.username}>
                {JSON.parse(localStorage.getItem("userLogin")).hoTen}
              </p>
            )}
          </div>
          <Divider />
          <div className={classes.sidebarContent}>
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
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default withStyles(styles)(Sidebar);
