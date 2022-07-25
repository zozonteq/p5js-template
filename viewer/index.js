const { app, BrowserWindow } = require("electron");
const url = require("url");

function newApp() {
  win = new BrowserWindow();
  win.loadURL("http://127.0.0.1:5500");
}

app.on("ready", newApp);
