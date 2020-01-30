var express = require('express');
var ParseDashboard = require('parse-dashboard');

var trustProxy = true;
var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "https://bk-demo-app.herokuapp.com/parse",
      "graphQLServerURL": "https://bk-demo-app.herokuapp.com/graphql",
      "appId": "bk-demo-app",
      "masterKey": "bk-demo-app-dummy-master-key",
      "appName": "BK Demo App",
      "production": true
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
