const express = require('express');
const app = express();
app.listen(3333);
app.use(express.json());

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros
// Query params: request.query (filtros, ordenação, paginação...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

app.get('/', (request, response) => {
    return response.json({message: 'Hello World'});
});