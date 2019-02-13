//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);

// require('dotenv').config();
// const express = require('express');
// const compression = require('compression');
// const path = require('path');
//
// const app = express();
//
// app.use(compression());
//
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
//
// const PORT = process.env.PORT || 3002;
//
// app.listen(PORT, '0.0.0.0', (err) => {
//   if (err) { console.log(err); }
//   // console.info(`==> 🌎 app listening on http://localhost:${PORT}.`);
//   console.log(`==> 🌎 app listening on http://localhost:${PORT}.`);
// });
