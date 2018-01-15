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

const window = ({ setAlwaysOnTop }) => {
  return {
    label  : 'window',
    submenu: [
      {
        type: 'checkbox',
        label: '常に最前面にする',
        click: (flag) => setAlwaysOnTop(flag.checked)
      }
    ]
  };
};

const help = {
  role   : 'help',
  submenu: [
    {
      label: 'GitHub repository',
      click: () => shell.openExternal('https://github.com/abouthiroppy/nicohaco')
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
function createMenu(funcs) {
  const common = [about, edit, window(funcs), help];
  const template = process.env.NODE_ENV === 'production' ? common : [...common, dev];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

module.exports = createMenu;
