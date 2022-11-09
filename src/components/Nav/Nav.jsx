import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="#/">News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="#/">Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="#/">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
