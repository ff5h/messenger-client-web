import { Button, Input } from "../../components";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.login_form}>
        <h1>Sign In</h1>
        <div className={styles.sign_in__inputs}>
          <Input />
          <Input />
        </div>
        <Button />
        <a className={styles.link} href="">
          Create account
        </a>
      </div>
    </div>
  );
};

export { LoginPage };
