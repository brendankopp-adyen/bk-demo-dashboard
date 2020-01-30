var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

var api = new ParseServer({
  databaseURI: 'mongodb://bk-demo-app-db-user:dhg73-9SY18$923Xsy%dk23!@ds039125.mlab.com:39125/heroku_39dptd5q',
  appId: 'bk-demo-app',
  masterKey: 'bk-demo-app-dummy-master-key-xxx',
  serverURL: 'https://bk-demo-app.herokuapp.com/parse',
});

var options = { allowInsecureHTTP: false };

var trustProxy = true;
var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "https://bk-demo-app.herokuapp.com/parse",
      "appId": "bk-demo-app",
      "masterKey": "bk-demo-app-dummy-master-key-xxx",
      "appName": "BK Demo App",
      "production": false,
      "primaryBackgroundColor": "#FFA500", 
      "secondaryBackgroundColor": "#FF4500"
    }
  ],
  "users": [
    {
      "user":"brendan",
      "pass":"bk-demo-app-pw"
    }
   ],
  "trustProxy": 1
});

var app = express();

// make the Parse Server available at /parse
app.use('/parse', api);

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(4040);
