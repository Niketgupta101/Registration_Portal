const express = require("express");
const routes = require('../api/routes/v1/index.js');
const errorHandler = require('../api/middlewares/error');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.use('/v1', routes);

app.use(errorHandler);

module.exports = app;