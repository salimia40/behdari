const { app, BrowserWindow } = require("electron");
const { sequelize } = require("./db");

require("./web")().then((server) => {
  console.info("happy I amm");
  function createWindow() {
    const win = new BrowserWindow({
      width: 1000,
      height: 800,
      webPreferences: {
        devTools: false,
      },
    });
    win.removeMenu();

    win.loadURL("http://localhost:8080");
  }
  app.whenReady().then(() => {
    console.info("ready I amm");
    createWindow();
  });

  app.on("window-all-closed", function () {
    if (process.platform !== "darwin") app.quit();
    server.removeAllListeners();
    sequelize.close();
  });

  console.log(app);
});
