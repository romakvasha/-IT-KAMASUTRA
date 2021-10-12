import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const dialogs = [
  { id: 1, name: "Ruslana" },
  { id: 2, name: "Roma" },
  { id: 3, name: "Taras" },
  { id: 4, name: "Sergey" },
  { id: 5, name: "Andry" },
];

const messages = [
  { id: 1, message: "Привіт" },
  { id: 2, message: "Пока" },
  { id: 3, message: "Привіт" },
  { id: 4, message: "Привіт" },
  { id: 5, message: "Привіт" },
];

const Dialogs = (props) => {
  const dialogsElement = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElement = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
