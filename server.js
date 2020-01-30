const express = require('express');
const { ParseServer } = require('parse-server');
const ParseDashboard = require('parse-dashboard');

//DEFINE THE APP
var app = express();

//PARSE SERVER
var api = new ParseServer({
  databaseURI: 'mongodb://bk-demo-app-db-user:dhg73-9SY18$923Xsy%dk23!@ds039125.mlab.com:39125/heroku_39dptd5q',
  appId: 'bk-demo-app',
  masterKey: 'bk-demo-app-dummy-master-key-xxx',
  serverURL: 'https://bk-demo-app.herokuapp.com/parse',
});
app.use('/parse', api);

//PARSE DASHBOARD
var trustProxy = true;
var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "https://bk-demo-app.herokuapp.com/parse",
      "appId": "bk-demo-app",
      "masterKey": "bk-demo-app-dummy-master-key-xxx",
      "appName": "BK Demo App",
      "production": true,
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

app.use('/dashboard', dashboard);

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

//ROUTES

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a website ... build me!');
});

//START IT

const port = 1337;
const httpServer = require('http').createServer(app);

httpServer.listen(port, () => {
  console.log(`parse-server running on port: ${port}`);
});


