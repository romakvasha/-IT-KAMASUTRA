import { data, subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const renderEntireTree = (data) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        data={data}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderEntireTree(data);

subscribe(renderEntireTree);
