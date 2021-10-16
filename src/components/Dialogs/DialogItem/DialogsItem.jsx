import React from "react";
import s from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";
import { DIALOGS } from "../../NavBar/constats";

const DialogItem = ({ item }) => {
  const { img, name, id } = item;
  const path = `${DIALOGS}/${id}`;

  return (
    <div className={s.dialog}>
      <img src={img} alt="аватарка" />
      <NavLink to={path} activeClassName={s.active}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
