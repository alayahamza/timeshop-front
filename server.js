const express = require('express');

const app = express();

app.use(express.static('./dist/time-shop-front'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/time-shop-front/'}),
);

app.listen(process.env.PORT || 8080);
