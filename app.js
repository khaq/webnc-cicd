const express = require('express');
const fs = require('fs');
const fibonacci = require('./fibonacci');

const app = express();

const info = JSON.parse(fs.readFileSync('./package.json'));

app.get('/', (_req, res) => {
  res.json({
    message: 'Hello Web NC',
  });
});

app.get('/fibonacci/:n', (req, res) => {
  const { n } = req.params;
  const result = fibonacci(Number(n));
  res.json({
    n,
    result,
  });
});

app.get('/info', (_req, res) => {
  res.json({
    name: info.name,
    version: info.version,
  });
});

const port = process.env.PORT || 3000;
app.listen(port);
