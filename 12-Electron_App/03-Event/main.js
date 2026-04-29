const { app, BrowserWindow } = require("electron")

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 500,
        frame:false,
    })

    win.loadFile("index.html")
}

// setTimeout(() => {
//     console.log(app.isReady());
// }, 1000);

// app.on("before-quit", (e)=>{
//     console.log("Call befor quit App");
//     e.preventDefault()
// })

// Must quit App
// app.on("will-quit", (e) => {
//     console.log("Call befor quit App (must)");
//     e.preventDefault()
// })


// When foucus then call fuction
app.on("browser-window-focus", (e) => {
    console.log("You are on app");
    e.preventDefault()
})


// When unfoucus then call fuction
app.on("browser-window-blur", (e) => {
    console.log("You are unfocus app");
    e.preventDefault()
})

app.on('ready', () => {
    createWindow()
    console.log("App is running");
})