# Google Chat App

Google Chat doesn't have official application for MacOS. Here you have one built with Electron.

Electron is a framework that allows you to create desktop applications using HTML, CSS and JavaScript. It works by using Chromium (to render the web) and Node.js (to access system functions) internally.

Basically, you create a small app that opens a Google Chat window, but looks like a standalone app. You can put it in the Dock, run it as a regular macOS app, and it won't have the classic browser elements (bookmarks, address bar, etc.).

## Installation

Use the package manager [pnpm](https://pnpm.io/) to install this app.

```bash
pnpm i
```

## Usage
Build with:
```bash
pnpm build
```
In `/dist` folder will be generated .dmg file. Install as any other MacOS app.

## License

[MIT](https://choosealicense.com/licenses/mit/)
