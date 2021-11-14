import React from "react";
import Dialogs from "./Dialogs";
import { addMessage, onMessageChange } from "../../redux/messages-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
/*const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};*/

const DialogsContainer = connect(mapStateToProps, {
  addMessage,
  onMessageChange,
})(Dialogs);

export default DialogsContainer;
