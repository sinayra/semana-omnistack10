const {Router} = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros
// Query params: request.query (filtros, ordenação, paginação...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;
    const apiGitResponse =  await axios.get(`https://api.github.com/users/${github_username}`);
    const name = apiGitResponse.data.name || apiGitResponse.data.login;
    const avatar_url = apiGitResponse.data.avatar_url;
    const bio = apiGitResponse.data.bio || '';
    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray
    });
    return response.json(dev);
});

module.exports = routes;