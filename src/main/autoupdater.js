// @flow

'use strict';

const { app, autoUpdater } = require('electron');

const server = 'https://hazel-server-zrvhbcejjx.now.sh';
const feed = `${server}/update/${process.platform}/${app.getVersion()}`;

console.log(app.getVersion())
autoUpdater.on('error', err => console.log(err));
autoUpdater.on('checking-for-update', () => console.log('アップデートの有無をチェック中'));
autoUpdater.on('update-available', () => console.log('アップデートを利用可能'));
autoUpdater.on('update-not-available', () => console.log('アップデートを利用不可能'));
autoUpdater.on('update-downloaded', () => console.log('アップデートをダウンロード済'));

console.log(feed)
autoUpdater.setFeedURL(feed);
autoUpdater.checkForUpdates();
