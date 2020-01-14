const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.listen(3333);
app.use(express.json());

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

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros
// Query params: request.query (filtros, ordenação, paginação...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});