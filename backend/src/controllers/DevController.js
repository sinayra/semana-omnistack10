const axios = require('axios');
const Dev = require('../models/Dev');
const { parseStringAsArray } = require('../utils/stringUtil');

//index, show, store, update, destroy

module.exports = {
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request, response)  {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(!dev){
            const apiGitResponse =  await axios.get(`https://api.github.com/users/${github_username}`);
            const name = apiGitResponse.data.name || apiGitResponse.data.login;
            const avatar_url = apiGitResponse.data.avatar_url;
            const bio = apiGitResponse.data.bio || '';
            
            const techsArray = parseStringAsArray(techs);
            
            const location = {
                type: 'Point',
                coordinates:[longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }
        return response.json(dev);
    },

    async update(request, response){
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if(dev){
            const apiGitResponse =  await axios.get(`https://api.github.com/users/${github_username}`);
            const name = apiGitResponse.data.name || apiGitResponse.data.login;
            const avatar_url = apiGitResponse.data.avatar_url;
            const bio = apiGitResponse.data.bio || '';

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates:[longitude, latitude]
            }

            dev = await Dev.updateOne({ github_username }, {
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }
        return response.json(dev);

    },

    async destroy(request, response){
        const { github_username } = request.params;

        let dev = await Dev.findOne({ github_username });

        if(dev){
            dev = await Dev.deleteOne({ github_username });
        }

        return response.json(dev);
    }
}