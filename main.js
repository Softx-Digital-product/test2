const {app, BrowserWindow} =require("electron");


app.whenReady().then(()=>{
  const window= new BrowserWindow({
    width:900,
    height:800,
    
    webPreferences:{
      nodeIntegration:true,
      contextIsolation:false,
      webviewTag:true
    }
    
  });

  window.webContents.setWindowOpenHandler(({ url }) => {
    if (url === 'about:blank') {
      return {
        action: 'allow',
        
        overrideBrowserWindowOptions: {
          frame: false,
          fullscreenable: false,
          backgroundColor: 'black',
          webPreferences: {
            nodeIntegration:true,
            contextIsolation:false,
            webviewTag:true
          }
        }
      }
    }
    return { action: 'deny' }
  })

window.setMenu(null);



  window.loadFile("./app/index.html");
  // window.loadURL("https://www.google.com");
})

