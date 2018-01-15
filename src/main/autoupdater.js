// @flow
/* eslint-disable no-console */

'use strict';

const { app, dialog, autoUpdater } = require('electron');

const server = 'https://hazel-server-ighgtcdaut.now.sh';
const feed = `${server}/update/${process.platform}/${app.getVersion()}`;

autoUpdater.on('error', (err) => console.log(err));
autoUpdater.on('checking-for-update', () => console.log('checking-for-update'));
autoUpdater.on('update-available', () => console.log('update-available'));
autoUpdater.on('update-not-available', () => console.log('update-not-available'));

autoUpdater.on('update-downloaded', () => {
  console.log('downloaded');

  const index = dialog.showMessageBox({
    message: 'アップデートあり',
    detail : '再起動してインストールできます。',
    buttons: ['再起動', '後で']
  });

  if (index === 0) {
    autoUpdater.quitAndInstall();
  }
});

autoUpdater.setFeedURL(feed);
autoUpdater.checkForUpdates();
