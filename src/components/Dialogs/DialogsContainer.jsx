import React from "react";
import Dialogs from "./Dialogs";
import { addMessage, onMessageChange } from "../../redux/messages-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/wuthAuthRedirect";
import { compose } from "redux";

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

export default compose(
  connect(mapStateToProps, {
    addMessage,
    onMessageChange,
  }),
  withAuthRedirect
)(Dialogs);
