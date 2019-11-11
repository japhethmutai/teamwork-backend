const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use((req, res, next) => {
  console.log('Request received!');
  next();
});

app.use((req, res, next) => {
  res.status(200);
  next();
});

app.get('/', function(req, res){
    res.send('Hello World');
  });

app.use((req, res, next) => {
  console.log('Response sent successfully!');
});

module.exports = app;