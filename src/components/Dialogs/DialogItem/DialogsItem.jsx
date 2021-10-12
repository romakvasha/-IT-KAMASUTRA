import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { DIALOGS } from "../../NavBar/constats";

const DialogItem = (props) => {
  const path = `${DIALOGS}/${props.id}`;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
