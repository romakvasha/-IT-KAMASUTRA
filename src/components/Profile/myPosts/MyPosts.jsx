import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(({ profilePage, ...props }) => {
  const MyPostsElement = profilePage.postData.map((item) => (
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
});

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostBody"
          placeholder="Post message"
          validate={[required, maxLength10]}
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
