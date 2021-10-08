import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" />
      {props.message}
      <div>
        <span> like {props.like} </span>
      </div>
    </div>
  );
};

export default Post;
