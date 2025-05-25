const v1ApiRoutes = require('./v1/index');
const express = require('express');
const app = express();

app.use('/v1', v1ApiRoutes);

module.exports = app;