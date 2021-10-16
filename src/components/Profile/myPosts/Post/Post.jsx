import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  const { item } = props;
  const { message, likesCount: likes } = item;
  return (
    <div className={s.item}>
      <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" />
      {message}
      <div>
        <span> like {likes} </span>
      </div>
    </div>
  );
};

export default Post;
