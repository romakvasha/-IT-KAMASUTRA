import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const postData = [
  { id: 1, message: "Привіт, як справи?", likesCount: 12 },
  { id: 2, message: "Це мій перший пост", likesCount: 20 },
  { id: 3, message: "Це мій другий пост", likesCount: 30 },
];

const MyPosts = () => {
    <Post message={p.message} id={p.id} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.postsBlog}>
      <div>
        <h3>My post</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>{MyPostsElement}</div>
    </div>
  );
};

export default MyPosts;
