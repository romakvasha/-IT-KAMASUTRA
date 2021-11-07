import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const MyPostsElement = props.profilePage.postData.map((item) => (
    <Post item={item} key={item.id} />
  ));
  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.onAddPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.onPostChange(text);
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
            <button onClick={onAddPost}>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>{MyPostsElement}</div>
    </div>
  );
};

export default MyPosts;
