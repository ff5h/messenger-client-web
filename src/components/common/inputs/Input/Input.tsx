import React from "react";
import styles from "./Input.module.scss";

const Input = () => {
  return (
    <div className={styles.input__block}>
      <label className={styles.input__label} htmlFor="login">Login</label>
      <input type="text" id="login" className={styles.input} />
      <div className={styles.validation}>Incorrect password</div>
    </div>
  );
};

export { Input };
