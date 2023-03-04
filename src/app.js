const express = require('express');
const bodyParser = require('body-parser')
const conn = require('./core/db-connection/conn')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

conn();

const routes = [
    require('./modules/artists/routes/route')
];

routes.forEach((route) => route(app));

module.exports = app;