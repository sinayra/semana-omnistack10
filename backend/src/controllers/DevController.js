const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async store (request, response)  {
        const { github_username, techs, latitude, longitude } = request.body;
    
        const apiGitResponse =  await axios.get(`https://api.github.com/users/${github_username}`);
        const name = apiGitResponse.data.name || apiGitResponse.data.login;
        const avatar_url = apiGitResponse.data.avatar_url;
        const bio = apiGitResponse.data.bio || '';
        
        const techsArray = techs.split(',').map(tech => tech.trim());
        
        const location = {
            type: 'Point',
            coordinates:[longitude, latitude]
        }
    
        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArray,
            location
        });
        return response.json(dev);
    }
}