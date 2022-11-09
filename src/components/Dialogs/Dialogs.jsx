import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.messages}>{props.message}</div>;
};

// export default DialogItem

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Greg" id="1" />
        <DialogItem name="Antony" id="2" />
        <DialogItem name="Joseph" id="3" />
        <DialogItem name="Andry" id="4" />
        <DialogItem name="Iren" id="5" />
        <DialogItem name="Bork" id="6" />
        <DialogItem name="Stan" id="7" />
      </div>
      <div className={classes.message}>
        <Message message="hi"/>
        <Message message="hi hi"/>
        <Message message="how are you"/>
      </div>
    </div>
  );
};

export default Dialogs;
