import React from "react";
import s from "./FriendsBar.module.css";
import { NavLink } from "react-router-dom";

const FriendsBar = () => {
  return (
    <div className={s.friendsBar}>
      <h5>Friends</h5>
    </div>
  );
};

export default FriendsBar;
