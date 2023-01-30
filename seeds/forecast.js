const { Forecast } = require('../models');

const forecastData = [
    {
        destination_id: 1,
        weather_id: 1,
    },
    {
        destination_id: 2,
        weather_id: 3,
    },
    {
        destination_id: 3,
        weather_id: 2,
    },
    {
        destination_id: 4,
        weather_id: 5,
    },
    {
        destination_id: 5,
        weather_id: 4,
    },
    {
        destination_id: 6,
        weather_id: 8,
    },
    {
        destination_id: 7,
        weather_id: 6,
    },
    {
        destination_id: 8,
        weather_id: 7,
    },
    {
        destination_id: 9,
        weather_id: 10,
    },
    {
        destination_id: 10,
        weather_id: 9,
    }
];

const seedForecast = () => Forecast.bulkCreate(forecastData);

module.exports = seedForecast;