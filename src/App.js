import React, { useState } from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { DIALOGS, PROFILE } from "./components/NavBar/constats";
import data from "./redux/state";

const App = () => {
  const [updatedData, setUpdatedData] = useState(data);
  const addPost = (message) => {
    const candidate = {
      id: Date.now(),
      message,
      likeCounts: 0,
    };
    const updatedDataCandidate = {
      ...updatedData,
      profilePage: {
        ...updatedData.profilePage,
        postData: [...updatedData.profilePage.postData, candidate],
      },
    };
    setUpdatedData(updatedDataCandidate);
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav data={data.navPage.navFriends} />
        <div class="app-wrapper-content">
          <Route
            path={DIALOGS}
            render={() => <Dialogs data={data.messagesPage} />}
          />
          <Route
            path={PROFILE}
            render={() => (
              <Profile data={updatedData.profilePage} addPost={addPost} />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
