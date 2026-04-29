const { app, BrowserWindow, Tray, Menu } = require("electron");

function createWindow() {

    const win = new BrowserWindow({
        width: 700,
        height: 700,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile("index.html")
    tray = new Tray("beta.png")
    tray.setToolTip("Tray to electron app")
    tray.on("click", () => {
        win.isVisible() ? win.hide() : win.show()
    })

    let template = [{label:"item 1", type:"radio"}, {label:"item 2"}]
    const contextMenu = Menu.buildFromTemplate(template)
    tray.setContextMenu(contextMenu)
}

app.whenReady().then(createWindow)
