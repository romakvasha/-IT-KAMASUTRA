import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = ({ isAuth, login, logout }) => {
  return (
    <header className={s.header}>
      <img src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2018/05/1-google-logo.png"></img>

      <div className={s.loginBlock}>
        {isAuth ? (
          <div>
            {login} - <button onClick={logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
