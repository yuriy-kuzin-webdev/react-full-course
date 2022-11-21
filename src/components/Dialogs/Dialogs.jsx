import React from "react";

import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({updateNewMessageBody,sendMessage,dialogsPage}) => {
  const onSendMessageClick = () => {
    sendMessage();
  };
  const onNewMessageChange = (e) => {
    updateNewMessageBody(e.target.value);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsPage.dialogs.map((d) => (
          <DialogItem name={d.name} id={d.id} key={d.id} />
        ))}
      </div>
      <div className={classes.message}>
        <div>
          {dialogsPage.messages.map((m) => (
            <Message message={m.message} />
          ))}
        </div>
        <div>
          <div>
            <textarea
              value={dialogsPage.newMessageBody}
              onChange={onNewMessageChange}
              placeholder="enter your message"
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
