import React from "react";
import classes from "../Dialogs.module.css";

const Message = (props) => {
  return <div className={classes.messages}>{props.message}</div>;
};

export default Message;
