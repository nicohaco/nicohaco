// @flow

import { shell } from 'electron';
import React from 'react';
import Button from '../../atoms/Button';
import photon from '../../../styles/photon';
import styles from './style.css';

type Props = {
  login: (string, string) => {};
};

const accountUrl = 'https://account.nicovideo.jp/register/email';

class Login extends React.Component<void, Props, void> {
  email: HTMLInputElement;
  password: HTMLInputElement;

  render() {
    const {
      login
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.icon} />
          <p>NicoHacoとはNicoBoxのPC版クライアントです</p>
          <p>Version: {process.env.VERSION}</p>
        </div>
        <form className={styles.form}>
          <div className={photon['form-group']}>
            <label>Email address</label>
            <input
              ref={(input) => this.email = input}
              type="email"
              className={photon['form-control']}
              placeholder="Email"
            />
          </div>
          <div className={photon['form-group']}>
            <label>Password</label>
            <input
              ref={(input) => this.password = input}
              type="password"
              className={photon['form-control']}
              placeholder="Password"
            />
          </div>
        </form>
        <div className={styles.buttons}>
          <Button
            onClick={() => login(
              this.email.value || process.env.MAIL,
              this.password.value || process.env.PASSWORD
            )}
          >
            ログインする
          </Button>
          <Button onClick={() => shell.openExternal(accountUrl)}>
            ニコニコ動画のアカウントを作る
          </Button>
        </div>
        <p>バグ・要望があればHelpにあるNicoHacoのissuesへどうぞ</p>
      </div>
    );
  }
}

export default Login;
