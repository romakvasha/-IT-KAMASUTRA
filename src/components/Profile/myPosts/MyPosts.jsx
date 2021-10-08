import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        My post
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message="Привіт, як справи?" like="15" />
        <Post message="Це мій перший пост" like="20" />
        <Post message="Це мій другий пост" like="30" />
      </div>
    </div>
  );
};

export default MyPosts;
