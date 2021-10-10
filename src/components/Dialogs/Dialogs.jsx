import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DIALOGS = "/dialogs";

const dialogItems = ["Руслана", "Роман", "Тарас", "Сірожа", "Андрій"];

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={`${DIALOGS}/${props.id}`} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const message = (props) => {
  return (
    <div className={s.messages}>
      <NavLink to={`/${DIALOGS}/${props.id}`} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogItems.map((el, index) => (
          <DialogItem name={el} id={index + 1} key={`DialogItem_${index}`} />
        ))}
      </div>
      <div className={s.messages}>
        <div className={s.message}>Привіт</div>
        <div className={s.message}>Я вивчаю програмування</div>
        <div className={s.message}>Привіт! як справи?</div>
      </div>
    </div>
  );
};

export default Dialogs;
