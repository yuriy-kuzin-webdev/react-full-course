import React from "react";

import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/reducers/dialogs-reducer";

// export default DialogItem

const Dialogs = (props) => {
  let state = props.state.dialogsPage;
  const onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };
  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyActionCreator(body));
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {state.dialogs.map((d) => (
          <DialogItem name={d.name} id={d.id} key={d.id} />
        ))}
      </div>
      <div className={classes.message}>
        <div>
          {state.messages.map((m) => (
            <Message message={m.message} />
          ))}
        </div>
        <div>
          <div>
            <textarea
              value={state.newMessageBody}
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
