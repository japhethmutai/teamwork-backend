const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/article');
const gifRoutes = require('./routes/gif');
const feedRoutes = require('./routes/feed');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/articles', articleRoutes);
app.use('/api/v1/gifs', gifRoutes);
app.use('/api/v1/feed', feedRoutes);

module.exports = app;