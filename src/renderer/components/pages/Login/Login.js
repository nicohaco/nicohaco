// @flow

import { shell } from 'electron';
import React from 'react';
import Button from '../../atoms/Button';
import photon from '../../../styles/photon';
import styles from './style.css';

type Props = {
  login: (string, string) => {};
};

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
          <p>Version: α</p>
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
            onClick={() =>
              shell.openExternal('https://account.nicovideo.jp/register/email?site=niconico&sec=common_header&next_url=%2F&mode=landing')
            }
          >
            ニコニコ動画のアカウントを作る
          </Button>
          <Button
            onClick={() => login(this.email.value, this.password.value)}
          >
            ログインする
          </Button>
        </div>
        <p>バグ・要望があればHelpにあるNicoHacoのissuesへどうぞ</p>
      </div>
    );
  }
}

export default Login;
