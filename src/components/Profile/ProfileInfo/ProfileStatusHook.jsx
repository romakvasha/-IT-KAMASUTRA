import React, { useEffect, useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusHook = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "not status"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
            value={status}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatusHook;
