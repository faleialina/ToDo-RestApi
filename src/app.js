const express = require('express');
const bodyParser = require('body-parser');
const task = require('./controller/task.controller');

const app = express();
app.use(bodyParser.json());
app.use('/task', task);
app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;