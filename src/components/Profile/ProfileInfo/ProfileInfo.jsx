import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusHook from "./ProfileStatusHook";
const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div></div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt="ava" />
        <ProfileStatusHook status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
