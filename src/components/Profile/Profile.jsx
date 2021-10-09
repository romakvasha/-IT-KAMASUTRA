import React from "react";
import MyPosts from "./myPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://img.hospital/wp-content/uploads/2020/02/ARS-02.png"></img>
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
