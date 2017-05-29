// @flow

'use strict';

const { app, Menu, shell } = require('electron');

const about = {
  label  : app.getName(),
  submenu: [
    {
      role: 'about'
    },
    {
      type: 'separator'
    },
    {
      role   : 'services',
      submenu: []
    },
    {
      type: 'separator'
    },
    {
      type: 'separator'
    },
    {
      role: 'quit'
    }
  ]
};

const edit = {
  label  : 'edit',
  submenu: [
    {
      role: 'undo'
    },
    {
      role: 'redo'
    },
    {
      type: 'separator'
    },
    {
      role: 'cut'
    },
    {
      role: 'copy'
    },
    {
      role: 'paste'
    },
    {
      role: 'pasteandmatchstyle'
    },
    {
      role: 'delete'
    },
    {
      role: 'selectall'
    }
  ]
};

const help = {
  role   : 'help',
  submenu: [
    {
      label: 'GitHub repository',
      click: () => shell.openExternal('https://github.com/abouthiroppy/nicohako')
    }
  ]
};

const dev = {
  label  : 'dev',
  submenu: [
    {
      role: 'reload'
    },
    {
      role: 'toggledevtools'
    }
  ]
};

/**
 * create the menu
 */
function createMenu() {
  const template = process.env.NODE_ENV === 'production' ?
    [about, edit, help] :
    [about, edit, help, dev];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

module.exports = createMenu;
