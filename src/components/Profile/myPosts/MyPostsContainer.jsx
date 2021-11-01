import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const onAddPost = () => {
    const action = addPostActionCreator();
    props.store.dispatch(action);
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      onAddPost={onAddPost}
      postData={state.profilePage.postData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
