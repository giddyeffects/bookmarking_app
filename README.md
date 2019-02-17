# A simple bookmarking App using Electron and updated to use latest VueJs 2+ and latest Firebase SDK

This is an update for the electron version (1.6.11), webpack version (3.5.4), latest VueJS version (2.4.2) and the latest Firebase SDK (4.2.0) for the tutorial by [coligo](http://coligo.io/bookmarking-app-electron-vuejs-firebase/)

### Clone the repository
``` git clone https://github.com/giddyeffects/bookmarking_app <your_folder>```
### Setup Firebase database config file
 Create a file called **config.js** in the folder **app/store/** with contents below
```javascript
let config = {
    apiKey: "<Your API KEY>",
    authDomain: "<your-project-id>.firebaseapp.com",
    databaseURL: "https://<your-project-id>.firebaseio.com",
    projectId: "<your-project-id>",
    storageBucket: "<your-project-id>.appspot.com",
    messagingSenderId: "<Your Messaging Sender ID>"
 };

 export default config
 ```

 ### Install dependencies
 Change directory to <your_folder>
 ```bash
 npm install
 ```

 ### Run the build
 ```bash
 webpack
 ```
 or
 ```bash
 node_modules\.bin\webpack (if you have installed webpack locally)
 ```

 ### Launch the App
 ```bash
 npm start
 ```
 And start bookmarking your favourite sites...
 ### @TODO
 More updates expected: e.g. Add full CRUD to categories and bookmarks