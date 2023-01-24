//maqin process
const { app, BrowserWindow, ipcMain,Notification } = require("electron");
const path = require('path');
const isDev = !app.isPackaged;


function createWindow() {
  //render process
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      //will sanitize JS code
      worldSafeExecuteJavascript:true,
     //is a feature that ensure that both, your preload scripts and electron
     //internal logic tun in seprate context.
      contextIsolation:true,
      preload:path.join(__dirname,'preload.js')
    },
  });

  win.loadFile("index.html");
  isDev && win.webContents.openDevTools();
}


if(isDev)
{
  require('electron-reload')(__dirname,{
    electron:path.join(__dirname,'node_modules','.bin','electron')

  })
}

app.whenReady().then(createWindow);

ipcMain.on('notify',(_,message)=>{
 new Notification({title:'Notification',body:message}).show();
})

ipcMain.on('app-quit',()=>{
  app.quit();
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", ()=> {
  if (BrowserWindow.getAllWindows.length === 0) {
    createWindow();
  }
});

//Chromium => web engine for rendering the UI ,full Chrome-like web browser
//V8 => engine that provide capabilties to ececute , run , JS code in the browser


// Webpack -> is a module builder, main purpose is to bundle JS files for usage in the browsert
// Babel -> js a JS compiler
