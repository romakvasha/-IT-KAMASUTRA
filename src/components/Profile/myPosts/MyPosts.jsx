import React, { useState } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ data, addPost: propAddPost }) => {
  const [message, setMessage] = useState("");
  const MyPostsElement = data.map((item) => <Post item={item} />);

  const addPost = () => {
    propAddPost(message);
    setMessage("");
  };

  return (
    <div className={s.postsBlog}>
      <div>
        <h3>My post</h3>
        <div>
          <div>
            <textarea
              onChange={(event) => setMessage(event.target.value)}
              value={message}
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
