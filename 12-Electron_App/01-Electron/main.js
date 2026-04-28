// console.warn("Electron Working");
// BrowserWindow: ye hame app ko run kare deta hai
// openDevTools: ye devtool ko khud se open kardega
const {app, BrowserWindow} = require("electron")


console.log("main js file")
function createWindow(){
    
    const win = new BrowserWindow({
        width:800,
        height:600,
        title:"Desktop Application",
        resizable:false,
        darkTheme:true,
        // alwaysOnTop:true,
        // frame:false,
        // backgroundColor:'#ff0',
        webPreference:{
            nodeIntegration:true
        }

        
    })
    let child = new BrowserWindow({parent:win});
    child.loadFile("index.html");
    child.show
    win.loadFile("index.html");
    win.webContents.openDevTools()
}


app.whenReady().then(createWindow)
