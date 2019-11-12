const express = require('express');

const app = express();
const articleRoutes = require('./routes/article');
const gifRoutes = require('./routes/gif');
const feedRoutes = require('./routes/feed');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/v1/articles', articleRoutes);
app.use('/api/v1/gifs', gifRoutes);
app.use('/api/v1/feed', feedRoutes);

//Define request response in root URL (/)
app.get('/', (req, res) => {
    res.send('ci with travis');
  });

module.exports = app;