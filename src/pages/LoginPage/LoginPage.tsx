import React from "react";
import { Button, Input } from "../../components";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  const [formValues, setFormValues] = React.useState({ login: "", password: "" });
  const [inputType] = React.useState("password");
  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <h1>Sign In</h1>
        <div className={styles.inputs}>
          <Input
            value={formValues.login}
            label="Login"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, login: event.target.value })
            }
          />
          <Input
            value={formValues.password}
            label="Password"
            type={inputType}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, password: event.target.value })
            }
          />
        </div>
        <Button>Sign in</Button>
        <a className={styles.link} href="#">
          Create account
        </a>
      </div>
    </div>
  );
};
