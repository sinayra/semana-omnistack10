const {Router} = require('express');
const DevController = require('./controllers/DevController')
const routes = Router();

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros
// Query params: request.query (filtros, ordenação, paginação...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

routes.post('/devs', DevController.store);

module.exports = routes;