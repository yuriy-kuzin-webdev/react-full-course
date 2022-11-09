import React from "react";
import classes from  "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <a href="/profile">Profile</a>
      </div>
      <div className={classes.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={classes.item}>
        <a href="#/">News</a>
      </div>
      <div className={classes.item}>
        <a href="#/">Music</a>
      </div>
      <div className={classes.item}>
        <a href="#/">Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
