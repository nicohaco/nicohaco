// @flow

'use strict';

const path = require('path');
const windowManager = require('@nicohaco/electron-window-manager');
const {
  app,
  session,
  ipcMain,
  globalShortcut
} = require('electron');
const createMenu = require('./menu');

require('./autoupdater');

let mainWindow, subWindow;
let openedSubWindow = false;

const url = 'http://.nicovideo.jp';

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {

  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

ipcMain.on('controlSubWindow', () => {
  setAlwaysOnTop();
});

ipcMain.on('sendVideoInfoToSubWindow', (e, c) => {
  if (subWindow) subWindow.content().send('addVideo', c);
});

ipcMain.on('setCookie', (e, c) => {
  const cookie = {
    url,
    name : 'user_session',
    value: c.match(/user_session=(.+?);/)[1]
  };

  session.defaultSession.cookies.set(cookie, (err) => {
    if (err) {
      console.error(err);
    }
  });
});

ipcMain.on('setNicohistory', (e, c) => {
  const cookie = {
    url,
    name : 'nicohistory',
    value: c.match(/nicohistory=(.+?);/)[1]
  };

  session.defaultSession.cookies.set(cookie, (err) => {
    if (err) {
      console.error(err);
    }
  });
});

function createWindow() {
  app.commandLine.appendSwitch('disable-web-security');

  const html = process.env.NODE_ENV !== 'production' ?
    'http://localhost:8080/core.html' :
    `file://${path.join(__dirname, '..', 'dist', 'core.html')}`;

  if (process.env.NODE_ENV !== 'production') {

    // Install redux-devtools and react-developer-tools.
    const {
      default: installExtension,
      REDUX_DEVTOOLS,
      REACT_DEVELOPER_TOOLS
    } = require('electron-devtools-installer');

    installExtension([
      REDUX_DEVTOOLS,
      REACT_DEVELOPER_TOOLS
    ])
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
  }

  mainWindow = windowManager.open('main', 'NicoHaco', html, false, {
    frame         : !(process.platform === 'darwin'),
    width         : 1250,
    height        : 800,
    minWidth      : 1050,
    minHeight     : 450,
    resizable     : true,
    alwaysOnTop   : false,
    showDevTools  : process.env.NODE_ENV !== 'production',
    titleBarStyle : process.platform === 'darwin' ? 'hidden' : 'hidden-inset',
    webPreferences: {
      webSecurity: false
    }
  });

  createMenu({
    deleteDB,
    setAlwaysOnTop
  });

  // block ads
  session.defaultSession.webRequest.onBeforeSendHeaders({
    urls: ['http://ads.nicovideo.jp/*']
  }, (details, callback) => {
    callback({ cancel: true });
  });

  globalShortcut.register('MediaPlayPause', () => {
    mainWindow.content().send('updateAudioStatus');
  });
}

function createSubWindow() {
  const url = process.env.NODE_ENV !== 'production' ?
    'http://localhost:8080/sub.html' :
    `file://${path.join(__dirname, '..', 'dist', 'sub.html')}`;

  subWindow = windowManager.open('sub', 'NicoHaco', url, false, {
    width         : 640,
    height        : 480,
    frame         : !(process.platform === 'darwin'),
    position      : 'bottomRight',
    resizable     : true,
    alwaysOnTop   : true,
    titleBarStyle : 'hidden',
    webPreferences: {
      webSecurity: false
    }
  }, () => {

    // native `close` event can not be acquired after the second time
    mainWindow.content().send('subWindow', false);
    subWindow.destroy();
    openedSubWindow = false;
  });
}

function deleteDB() {
  mainWindow.content().send('deleteDB');

  app.relaunch();
}

function setAlwaysOnTop() {
  if (openedSubWindow) {
    openedSubWindow = false;
    mainWindow.content().send('subWindow', false);
  }
  else {
    if (!subWindow) createSubWindow();
    else subWindow.open();
    openedSubWindow = true;
    mainWindow.content().send('subWindow', true);
  }
}
