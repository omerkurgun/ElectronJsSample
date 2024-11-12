const { app, BrowserWindow } = require('electron');//Electron eklenir

function createWindow() {
    //Tarayıcı penceresi oluşturulur
    let win = new BrowserWindow({
        width: 350,//En
        height: 350,//Boy
        webPreferences: {
            nodeIntegration: true
        },
        minimizable: false, // Minimize edilemez
        maximizable: false, // Maximize edilemez
        resizable: false, // Yeniden boyutlandırılamaz
        autoHideMenuBar: true, // Üstteki menubar'ı kapar
        menuBarVisible: false // Menü çubuğunu kapatır
    });

    //Pencerede yüklenmesi istenilen html dosyası seçilir
    win.loadFile('index.html');
}

//Electron başlatıldığında pencere oluşturulur
app.whenReady().then(createWindow);

//Tüm pencereler kapandığında uygulamayı kapanır
app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});