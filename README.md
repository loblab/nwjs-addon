# NW.js Addon Demo

A hello-world demo of NW.js addon. As a start of web app with C++ addon.

- Platform: Windows, Mac, Linux. Tested on:
  - Windows 10, VS2015
  - macOS 10.13.4, Xcode 9.x
  - Ubuntu 18.04
- NW.js: v0.29.2
- Ver: 0.1
- Updated: 5/9/2018
- Created: 5/9/2018
- Author: loblab

## Setup

1. Download/install node.js
2. Install/switch to python 2.7 (node-gyp, nw-gyp don't support python 3.x)
3. Download [NW.js 0.29.2 for your system](https://dl.nwjs.io/v0.29.2/) (SDK version is better for debugging).
4. Extract/copy NW.js to your system. e.g. D:\sdk\nwjs-sdk-v0.29.2-win-x64\ (for Windows), /Applications/nwjs.app/ (for Mac)

```bash
sudo apt install npm
sudo npm update -g npm
sudo npm install -g nw-gyp
```

## Build

```bash
nw-gyp --target=0.29.2 configure
nw-gyp --target=0.29.2 build
```

Or run build.sh (for Mac/Linux), build.bat (for Windows)

## Run

Use NW.js to start this application

```bash
# for Windows
D:\sdk\nwjs-sdk-v0.29.2-win-x64\nw.exe .

# for Mac
alias nw="/Applications/nwjs.app/Contents/MacOS/nwjs"
nw .
```

or modify & run start-win.bat (for Windows), start-mac.sh (for Mac), start-lnx.sh (for Linux).

## Debugging

Launch main UI, press

- F12 (Windows, Linux)
- ⌘+⌥+i (Mac)

Check logs in the console.

## References

- [Node.js: C++ Addons](https://nodejs.org/api/addons.html)
- [native addon build tool for node-webkit](https://github.com/nwjs/nw-gyp)
