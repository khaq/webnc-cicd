const express = require('express');
const fibonacci = require('./fibonacci');

const app = express();

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

const port = process.env.PORT || 3000;
app.listen(port);
