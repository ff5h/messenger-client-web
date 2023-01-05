import React from "react";
import { Button, Input } from "../../components";
import styles from "./RegistrationPage.module.scss";

export const RegistrationPage = () => {
  const [formValues, setFormValues] = React.useState({ login: "", password: "" });
  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <h1>Sign up</h1>
        <div className={styles.inputs}>
          <Input
            value={formValues.login}
            label="Email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, login: event.target.value })
            }
          />
          <Input
            value={formValues.login}
            label="Login"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, login: event.target.value })
            }
          />
          <Input
            value={formValues.login}
            label="Name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, login: event.target.value })
            }
          />
          <Input
            value={formValues.login}
            label="Last name"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFormValues({ ...formValues, login: event.target.value })
            }
          />
        </div>
        <Button>Next</Button>
        <a className={styles.link} href="#">
          Sign in
        </a>
      </div>
    </div>
  );
};
