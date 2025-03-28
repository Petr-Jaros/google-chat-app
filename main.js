const { app, BrowserWindow } = require("electron");

let win;
app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  win.loadURL("https://chat.google.com/");
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
