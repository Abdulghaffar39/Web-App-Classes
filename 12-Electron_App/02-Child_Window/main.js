const {app, BrowserWindow} = require("electron");

function createWindow(){
    const win = new BrowserWindow({
        width:700,
        height:700,
        webPreferences:{
            nodeIntegration:true
        }
    })
    
    // let child = new BrowserWindow({parent:win})
    // child.loadFile("child.html")
    // child.show
    win.loadFile("index.html"),
    win.webContents.openDevTools()
}


app.whenReady().then(createWindow)
