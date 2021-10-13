import React from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { DIALOGS, PROFILE } from "./components/NavBar/constats";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div class="app-wrapper-content">
          <Route
            path={PROFILE}
            render={() => <Profile postData={props.postData} />}
          />
          <Route
            path={DIALOGS}
            render={() => (
              <Dialogs messages={props.messages} dialogs={props.dialogs} />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
