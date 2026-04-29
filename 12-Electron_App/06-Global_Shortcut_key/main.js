const {app, BrowserWindow, globalShortcut} = require("electron");

function createWindow(){
    const win = new BrowserWindow({
        width:700,
        height:700,
        webPreferences:{
            nodeIntegration:true
        }
    })
    
    win.loadFile("index.html")
    globalShortcut.register("ctrl+P", ()=> {
        win.loadFile("other.html")
        console.log("ctrl + p Shortcut Key Woring");
        
    })
}


app.whenReady().then(createWindow)
