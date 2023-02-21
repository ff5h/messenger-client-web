import React from 'react';
import { Button, Input } from '~/components';
import { useActions } from '~/hooks/useActions';
// import { useTypedSelector } from '~/hooks/useTypedSelector';
import styles from './RegistrationPage.module.scss';

export const RegistrationPage = () => {
  const [email, setEmail] = React.useState('');
  const [login, setlogin] = React.useState('');
  const [password, setpassword] = React.useState('');
  // const { tokens, loading, error } = useTypedSelector((state) => state.auth);
  const { registration } = useActions();

  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <h1>Sign up</h1>
        <div className={styles.inputs}>
          <Input
            value={email}
            label='Email'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          />
          <Input
            value={login}
            label='Login'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setlogin(event.target.value)}
          />
          <Input
            value={password}
            label='Password'
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setpassword(event.target.value)
            }
          />
        </div>
        <Button onClick={() => registration(email, login, password)}>Next</Button>
        <a className={styles.link} href='#'>
          Sign in
        </a>
      </div>
    </div>
  );
};
