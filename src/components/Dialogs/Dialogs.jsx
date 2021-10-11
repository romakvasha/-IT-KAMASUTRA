import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Ruslana" },
    { id: 2, name: "Roma" },
    { id: 3, name: "Taras" },
    { id: 4, name: "Sergey" },
    { id: 5, name: "Andry" },
  ];

  let messages = [
    { id: 1, message: "Привіт" },
    { id: 2, message: "Пока" },
    { id: 3, message: "Привіт" },
    { id: 4, message: "Привіт" },
    { id: 5, message: "Привіт" },
  ];

  let dialogsElement = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElement = messages.map((m) => (
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

//const DIALOGS = "/dialogs";
//const dialogItems = ["Руслана", "Роман", "Тарас", "Сірожа", "Андрій"];
/*<div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogItems.map((el, index) => (
          <DialogItem name={el} id={index + 1} key={`DialogItem_${index}`} />
        ))} 
      </div>*/
