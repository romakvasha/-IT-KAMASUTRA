import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Руслана</div>
        <div className={s.dialog}>Рома</div>
        <div className={s.dialog}>Тарас</div>
        <div className={s.dialog}>Сірожа</div>
        <div className={s.dialog}>Андрій</div>
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
