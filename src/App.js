import React from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import { DIALOGS, PROFILE } from "./components/NavBar/constats";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav data={props.data.navPage.navFriends} />
      <div class="app-wrapper-content">
        <Route
          path={DIALOGS}
          render={() => <Dialogs data={props.data.messagesPage} />}
        />
        <Route
          path={PROFILE}
          render={() => (
            <Profile
              profilePage={props.data.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
      </div>
    </div>
  );
};

export default App;
