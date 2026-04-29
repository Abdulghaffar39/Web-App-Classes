const {app, BrowserWindow} = require("electron");

function createWindow(){
    const win = new BrowserWindow({
        width:700,
        height:700,
        webPreferences:{
            nodeIntegration:true
        }
    })
    
    win.loadFile("index.html");
    // Jab hamara dom load hoga tab show hoga
    let wc = win.webContents;
    wc.on("dom-ready", ()=> {
        console.log("app dom is ready");
        
    })

    // Jab hamara html ka content load hoga tab show hoga
    wc.on("did-finish-load", ()=> {
        console.log("did-finish-load");
        
    })

    // Jab hamara new window show hogi
    wc.on("did-create-window", ()=> {
        console.log("new window open");
    })

    wc.on("before-input-event", ()=> {
        console.log("some key is pressed");
    })
}


app.whenReady().then(createWindow)
