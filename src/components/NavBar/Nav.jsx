import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { DIALOGS, MUSIC, NEWS, PROFILE, SETTING } from "./constats";
import FriendsBar from "./../FriendsBar/FriendsBar";

const Nav = ({ data }) => {
  const friendsBarElement = data.map((item) => <FriendsBar item={item} />);

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
        <div className={s.friendsBarItems}>
          <h5>Friends 1</h5>
          {friendsBarElement}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
