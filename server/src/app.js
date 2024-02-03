const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const task = require('./controller/task.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swagger.json');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/task', task);
app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;
