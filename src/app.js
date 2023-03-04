const express = require('express');
const conn = require('./core/db-connection/conn')
const app = express();

conn();

const routes = [
    require('./modules/artists/routes/route')
];

routes.forEach((route) => route(app));

module.exports = app;