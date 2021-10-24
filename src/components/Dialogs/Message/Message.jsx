import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
  const { item } = props;
  const { message, id } = item;
  return <div className={s.dialog}>{message}</div>;
};

export default Message;
