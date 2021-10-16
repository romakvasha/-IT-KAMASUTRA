import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { DIALOGS, MUSIC, NEWS, PROFILE, SETTING } from "./constats";
import FriendsBar from "./FriendsBar/FriendsBar";

const Nav = () => {
  return (
    <div>
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to={PROFILE} activeClassName={s.active}>
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={DIALOGS} activeClassName={s.active}>
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={NEWS}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={MUSIC}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={SETTING}>Settings</NavLink>
        </div>
        <FriendsBar />
      </nav>
    </div>
  );
};

export default Nav;
