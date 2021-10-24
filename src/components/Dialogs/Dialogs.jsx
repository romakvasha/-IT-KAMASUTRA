import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  const dialogsElement = props.messagesPage.dialogs.map((item) => (
    <DialogItem item={item} />
  ));

  const messagesElement = props.messagesPage.messages.map((item) => (
    <Message item={item} />
  ));

  const newMessageElement = React.createRef();

  const addMessage = () => {
    const action = addMessageActionCreator();
    props.dispatch(action);
  };

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    const action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea
              onChange={onMessageChange}
              ref={newMessageElement}
              value={props.messagesPage.newMessageText}
            />
          </div>
          <div>
            <button onClick={addMessage}>Add post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
