import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      {/*<Profile />*/}
      <div class="app-wrapper-content">
        <Dialogs />
      </div>
    </div>
  );
};

export default App;
