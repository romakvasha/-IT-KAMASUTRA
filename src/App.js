import React from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import { Route } from "react-router-dom";
import { DIALOGS, FINDUSERS, PROFILE } from "./components/NavBar/constats";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Nav />
      <div class="app-wrapper-content">
        <Route path={DIALOGS} render={() => <DialogsContainer />} />
        <Route path={PROFILE} render={() => <ProfileContainer />} />
        <Route path={FINDUSERS} render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
