import React from "react";
import s from "./FriendsBar.module.css";
import { NavLink } from "react-router-dom";

const FriendsBar = ({ item }) => {
  const { img, name, alt } = item;
  return (
    <div className={s.friendsBar}>
      <div className={s.imgFriendsBar}>
        <img className={s.img} src={img} alt={alt} />
      </div>
      <div className={s.nameFriendsBar}>{name}</div>
    </div>
  );
};

export default FriendsBar;
