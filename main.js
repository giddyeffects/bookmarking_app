const {app, BrowserWindow} = require('electron')

let win

function createWindow() {
	win = new BrowserWindow({width:800, height:600, backgroundColor: '#2e2c29'})
	//win.setMenu(null)
	win.loadURL('file://' + __dirname + '/index.html');

	win.on('closed', () => {
		win = null
	})
}

app.on('ready', createWindow)

app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})