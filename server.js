const express = require('express');
const { ParseServer } = require('parse-server');

const app = express();

//API
const api = new ParseServer({
  databaseURI: 'mongodb://bk-demo-app-db-user:dhg73-9SY18$923Xsy%dk23!@ds039125.mlab.com:39125/heroku_39dptd5q',
  appId: 'bk-demo-app',
  masterKey: 'bk-demo-app-dummy-master-key-xxx',
  serverURL: 'https://bk-demo-app.herokuapp.com/parse',
});
app.use('/parse', api);

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a website ... build me!');
});

const port = 1337;
const httpServer = require('http').createServer(app);

httpServer.listen(port, () => {
  console.log(`parse-server running on port: ${port}`);
});
