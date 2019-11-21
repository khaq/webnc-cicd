const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.json({
    message: 'Hello Web NC',
  });
});

const port = process.env.PORT || 3000;
app.listen(port);
