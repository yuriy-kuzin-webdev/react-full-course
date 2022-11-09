import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/profile"
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="/dialogs"
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="#/"
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="#/"
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
          to="#/"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
