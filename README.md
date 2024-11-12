# Electron JS Sample

Bu proje, Electron.js ile masaüstü uygulamaları oluşturmak için basit bir örnektir. `electronjssample` adlı bu uygulama, farklı platformlar için paketleme ve dağıtım sürecini göstermektedir.

## Başlangıç

Bu projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

### Gereksinimler

- [Node.js](https://nodejs.org/) (en son sürümü önerilir)
- [Electron](https://www.electronjs.org/) (proje ile uyumlu sürüm)
- [Electron Packager](https://github.com/electron/electron-packager) (platforma özel paketleme için)

### Projeyi Çalıştırma

1. Bu repo'yu klonlayın:
    ```bash
    git clone <repo-url>
    cd electronjssample
    ```

2. Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. Uygulamayı başlatın:
    ```bash
    npm start
    ```

    Bu komut, Electron uygulamanızı başlatacaktır.

## Platforma Özel Paketleme

Projeyi farklı platformlarda dağıtmak için aşağıdaki komutları kullanabilirsiniz.

- **Linux için paketleme**:
    ```bash
    npm run package-linux
    ```

- **Windows için paketleme**:
    ```bash
    npm run package-windows
    ```

- **macOS için paketleme**:
    ```bash
    npm run package-macos
    ```

Bu komutlar, Electron uygulamanızı belirli bir platform için paketleyecek ve `release` dizinine çıktı alacaktır.
