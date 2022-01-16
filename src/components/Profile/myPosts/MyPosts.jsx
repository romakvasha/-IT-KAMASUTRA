import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";

const MyPosts = (props) => {
  const MyPostsElement = props.profilePage.postData.map((item) => (
    <Post item={item} key={item.id} />
  ));

  const addNewPost = (values) => {
    props.addNewPost(values.newPostBody);
  };

  return (
    <div className={s.postsBlog}>
      <div>
        <h3>My post</h3>
        <div>
          <AddPostFormRedux onSubmit={addNewPost} />
        </div>
      </div>
      <div className={s.posts}>{MyPostsElement}</div>
    </div>
  );
};

const AddPostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newPostBody"
          placeholder="Enter your post"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostFormRedux = reduxForm({ form: "addPostForm" })(AddPostForm);

export default MyPosts;
