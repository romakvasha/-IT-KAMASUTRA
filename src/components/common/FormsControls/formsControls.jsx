import React from "react";
import styles from "./formsControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const showError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (showError ? styles.error : "")}>
      <textarea {...input} {...props} />
      {showError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const showError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (showError ? styles.error : "")}>
      <input {...input} {...props} />
      {showError && <span>{meta.error}</span>}
    </div>
  );
};
