import React from "react";
import MyPosts from "./myPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://images.unsplash.com/photo-1633684268648-c6360f92a08d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
        ></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
