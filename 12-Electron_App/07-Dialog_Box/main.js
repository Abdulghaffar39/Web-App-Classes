const {app, BrowserWindow, globalShortcut, dialog} = require("electron");

function createWindow(){

    const win = new BrowserWindow({
        width:700,
        height:700,
        webPreferences:{
            nodeIntegration:true
        }
    })
    
    win.loadFile("index.html")
    // win.webContents.on("did-finish-load", ()=>{
    //     dialog.showOpenDialog({
    //         defaultPath:app.getPath("desktop"),
    //         buttonLabel:"Select File"
    //     });
    // })

    globalShortcut.register("Ctrl+f", ()=>{
        dialog.showOpenDialog({
            defaultPath:app.getPath("desktop"),
            buttonLabel:"Select File"
        });
    })
}

app.whenReady().then(createWindow)
