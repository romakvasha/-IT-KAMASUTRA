import React from "react";
import { connect } from "react-redux";
import { onAddPost, onPostChange } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};*/

const MyPostsContainer = connect(mapStateToProps, { onAddPost, onPostChange })(
  MyPosts
);

export default MyPostsContainer;
