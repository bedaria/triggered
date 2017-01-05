const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const port = 8080;

app.use(express.static(__dirname + '/../client/'));

app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client', 'index.html'));
});

app.set('port', port);

app.listen(app.get('port'), () => {
  console.log('Now listening on port: ' + port);
});