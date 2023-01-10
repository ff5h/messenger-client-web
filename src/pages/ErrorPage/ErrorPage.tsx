import React from "react";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.errorText}>
        <h1>500</h1>
        <h2>Oops! Something went wrong.</h2>
        <a className={styles.link} href="#">
          Go to home
        </a>
      </div>
    </div>
  );
};

export { ErrorPage };
