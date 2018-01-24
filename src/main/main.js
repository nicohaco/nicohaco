// @flow
/* eslint-disable no-console */

'use strict';

const path = require('path');
const {
  app,
  ipcMain,
  session,
  BrowserWindow
} = require('electron');
const createMenu = require('./menu');

require('./autoupdater');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
const url = 'http://.nicovideo.jp';
const sizePreset = {
  normal: {
    width: 1210,
    height: 800
  },
  small: {
    width: 640,
    height: 480
  }
};

/**
 * create browserWindow
 */
function createWindow() {
  app.commandLine.appendSwitch('disable-web-security');

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width : sizePreset.normal.width,
    height: sizePreset.normal.height,
    minWidth: 320,
    minHeight: 180,
    frame : false,
    alwaysOnTop   : false,
    titleBarStyle : 'hidden',
    webPreferences: {
      webSecurity: false
    },
    acceptFirstMouse: true
  });

  createMenu({
    deleteDB,
    setAlwaysOnTop
  });

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.loadURL('http://localhost:8080');

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

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  }
  else {
    mainWindow.loadURL(`file://${path.join(__dirname, '..', 'dist', 'index.html')}`);
  }

  const filter = {
    urls: ['http://ads.nicovideo.jp/*']
  };

  session.defaultSession.webRequest.onBeforeSendHeaders(filter, (details, callback) => {
    callback({ cancel: true });
  });

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {

  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

function deleteDB() {
  mainWindow.webContents.send('deleteDB');
}

// for main
function setAlwaysOnTop(flag) {
  mainWindow.setAlwaysOnTop(flag);
}

// for renderer
ipcMain.on('setAlwaysOnTop', (flag) => {
  setAlwaysOnTop(flag);
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
