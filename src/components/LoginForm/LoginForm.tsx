import { Input } from "../common/inputs/Input";
import { Button } from "../common/buttons/Button";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <h1>text</h1>
      <Input />
      <Input />
      <Button />
    </div>
  );
};

export { LoginForm };
