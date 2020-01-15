const Dev = require('../models/Dev');
const { parseStringAsArray } = require('../utils/stringUtil');

module.exports = {
    async index(request, response){
        const {latitude, longitude, techs} = request.query;
        const techsArray = parseStringAsArray(techs);

        const devs = Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    }
                },
                $maxDistance: 10000
            }
        });

        console.log(devs);
    }
}