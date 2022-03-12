import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatusHook from "./ProfileStatusHook";
import usersPhoto from "../../../assets/images/usersPhoto.jpg";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div></div>
      <div className={s.descriptionBlock}>
        <img
          src={profile.photos.large || usersPhoto}
          alt="ava"
          className={s.mainFoto}
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusHook status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
