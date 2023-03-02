const express = require('express');
const conn = require('./core/db-connection/conn')
const app = express();

conn();

module.exports = app;