import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const MyPostsElement = props.profilePage.postData.map((item) => (
    <Post item={item} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    props.addPost(text);
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlog}>
      <div>
        <h3>My post</h3>
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={props.profilePage.newPostText}
            />
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>{MyPostsElement}</div>
    </div>
  );
};

export default MyPosts;
