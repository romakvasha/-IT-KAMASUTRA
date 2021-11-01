import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/messages-reducer";

const DialogsContainer = (props) => {
  const state = props.store.getState();
  const addMessage = () => {
    const action = addMessageActionCreator();
    props.store.dispatch(action);
  };

  const onMessageChange = (text) => {
    const action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      dialogs={state.messagesPage.dialogs}
      messages={state.messagesPage.messages}
      newMessageText={state.messagesPage.newMessageText}
    />
  );
};

export default DialogsContainer;
