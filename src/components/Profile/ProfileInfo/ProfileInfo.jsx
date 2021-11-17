import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img
          className={s.img}
          alt=""
          src="https://images.unsplash.com/photo-1633684268648-c6360f92a08d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
        ></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="ava" />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
