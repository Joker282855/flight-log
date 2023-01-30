const { Forecast } = require('../models');

const forecastData = [
    {

    }
];

const seedForecast = () => Forecast.bulkCreate(forecastData);

module.exports = seedForecast;