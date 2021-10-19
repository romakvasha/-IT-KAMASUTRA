import React from "react";
import MyPosts from "./myPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ data, addPost }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts data={data.postData} addPost={addPost} />
    </div>
  );
};

export default Profile;
