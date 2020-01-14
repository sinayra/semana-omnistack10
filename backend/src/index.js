const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb://adm:adm@localhost:27017/omnistack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to localhost');
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

app.listen(3333);
app.use(express.json());
app.use(routes);
