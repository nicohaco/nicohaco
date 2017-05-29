// @flow

'use strict';

const { app } = require('electron');
const GhReleases = require('electron-gh-releases');

/**
 * setup AutoUpdater
 */
function initAutoUpdater() {

  const options = {
    repo          : 'abouthiroppy/nicohaco',
    currentVersion: app.getVersion()
  };
  const updater = new GhReleases(options);

  updater.check((err, status) => {
    if (!err && status) {
      updater.download();
    }
  });

  updater.on('update-downloaded', () => {
    updater.install();
  });

  updater.autoUpdater;
}

module.exports = initAutoUpdater;
