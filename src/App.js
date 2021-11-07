import React from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import { DIALOGS, FINDUSERS, PROFILE } from "./components/NavBar/constats";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div class="app-wrapper-content">
        <Route path={DIALOGS} render={() => <DialogsContainer />} />
        <Route path={PROFILE} render={() => <Profile />} />
        <Route path={FINDUSERS} render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
