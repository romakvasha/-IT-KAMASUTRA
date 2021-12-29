import React from "react";
import Dialogs from "./Dialogs";
import { addMessage, onMessageChange } from "../../redux/messages-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/wuthAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
  addMessage,
  onMessageChange,
})(AuthRedirectComponent);

export default DialogsContainer;
