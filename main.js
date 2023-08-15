const { app ,BrowserWindow } = require('electron')


const createWindow = () => {
	const win = new BrowserWindow({
		autoHideMenuBar : true,
		width : 950,
		height: 550
	})
	
	win.loadFile('index.html')
}



app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})