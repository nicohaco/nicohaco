/* eslint-disable flowtype/require-parameter-type, spaced-comment */

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
        label: 'Use Video Player with AlwaysOnTop',
        click: (flag) => setAlwaysOnTop(flag.checked)
      }
    ]
  };
};

const help = ({ deleteDB }) => {
  return {
    role   : 'help',
    submenu: [
      {
        label: 'GitHub repository',
        click: () => shell.openExternal('https://github.com/abouthiroppy/nicohaco')
      },
      {
        label: 'Delete DB',
        click: deleteDB
      }
    ]
  };
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

function createMenu(funcs /* :: Function */) {
  const common = [about, edit, window(funcs), help(funcs)];
  const template = process.env.NODE_ENV === 'production' ? common : [...common, dev];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

module.exports = createMenu;
