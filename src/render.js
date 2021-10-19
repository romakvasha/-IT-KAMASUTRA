import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { addPost } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

export const renderEntireTree = (data) => {
  ReactDOM.render(
    <BrowserRouter>
      <App data={data} addPost={addPost} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};
