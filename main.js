const { app, BrowserWindow } = require('electron');

let win;

app.on('ready', createWindow);
app.on('window-all-closed', onWindowClosed);
app.on('activate', activate);

function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600 });
  win.loadURL(`file://${__dirname}/build/index.html`);
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

function onWindowClosed () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
}

function activate () {
  if (win === null) {
    createWindow();
  }
}
