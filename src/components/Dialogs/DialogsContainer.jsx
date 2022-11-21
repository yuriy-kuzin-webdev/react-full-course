import React from "react";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";

export const DialogsContainer = ({ dispatch, dialogsPage }) => {
  const onNewMessageChange = (body) => {
    dispatch(updateNewMessageBodyActionCreator(body));
  };
  const onSendMessageClick = () => {
    dispatch(sendMessageActionCreator());
  };
  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={dialogsPage}
    />
  );
};
