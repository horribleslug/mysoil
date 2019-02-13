require('dotenv').config();
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

app.use(compression());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) { console.log(err); }
  // console.info(`==> 🌎 app listening on http://localhost:${PORT}.`);
  console.log(`==> 🌎 app listening on http://localhost:${PORT}.`);
});
