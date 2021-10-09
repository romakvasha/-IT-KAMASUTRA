import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div class="app-wrapper-content">
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
