var express = require('express');
var ParseDashboard = require('parse-dashboard');

var trustProxy = true;
var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "https://bk-demo-application.herokuapp.com/parse",
      "appId": "bk-demo-app",
      "masterKey": "bk-demo-app-dummy-master-key",
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

// make the Parse Dashboard available at /dashboard
app.use('/dashboard', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(4040);
